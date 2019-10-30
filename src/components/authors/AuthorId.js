import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class AuthorId extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.author.id}`)
            .then(response => {
                const posts = response.data
                this.setState({ posts })
            })
            .catch(err => {
                console.log(err)
            })

    }




    render() {

        return (
            <div>
                <h3>List of Posts</h3>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    )}
                </ul>
                <a href={`/authors`} className="btn btn-primary">Back</a>


            </div>

        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        author: state.authors.find(author => author.id === parseInt(id))
    }
}
export default connect(mapStateToProps)(AuthorId)
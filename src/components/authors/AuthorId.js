import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class AuthorId extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
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
                <button><Link to="/authors">Back</Link></button>


            </div>

        )
    }
}

export default AuthorId
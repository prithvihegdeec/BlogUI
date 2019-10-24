import React from 'react'
import axios from 'axios'
import { CardTitle, CardText } from 'reactstrap';



class RecentPost extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts?`)
            .then(response => {
                const posts = response.data
                this.setState({ posts, tempPost: posts.slice(0, 10) })
            })
            .catch(err => {
                console.log(err)
            })
    }




    render() {
        return (
            <div>
                <CardTitle>Recent 5 Posts:</CardTitle>
                <CardText>
                    <ul>
                        {this.state.posts.slice(this.state.posts.length - 5, this.state.posts.length).map(post => {
                            return (
                                <li key={post.id}>{post.title}</li>)
                        })}
                    </ul>
                </CardText>

            </div>

        )
    }
}

export default RecentPost
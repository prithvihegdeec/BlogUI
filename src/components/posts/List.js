import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PostsList extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 10
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            if (this.state.count < this.props.posts.length) {
                return {
                    count: prevState.count + 10
                }

            } else {
                return {
                    count: prevState.count
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Listing Posts - {this.state.count}</h2>

                <ul>
                    {this.props.posts.slice(0, this.state.count).map(post => {
                        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
                <button className="btn btn-dark" onClick={this.handleClick}>Load More</button>
            </div >

        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList)
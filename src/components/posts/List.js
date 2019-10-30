import React from 'react'
import { connect } from 'react-redux'

class PostsList extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 5
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            if (this.state.count < this.props.posts.length) {
                return {
                    count: prevState.count + 5
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
            <div className="container">
                <h2>Listing Posts - {this.state.count}</h2>
                <div className="row">
                    {this.props.posts.slice(0, this.state.count).map(post => {
                        return (
                            <div className="col-md-4 mb-2" key={post.id}>
                                <div className="card bg-dark text-white">
                                    <div className="card-body">
                                        <h5 className="card-titile">{post.title}</h5>
                                        <p class="card-text">{post.body}</p>
                                        <a href={`/posts/${post.id}`} className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <button className="btn btn-success" onClick={this.handleClick}>Load More</button>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList)
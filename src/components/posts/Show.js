import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function PostShow(props) {
    return (
        <div>
            {props.post && (
                <div>
                    <p>Title: {props.post.title}</p>
                    <p>Body: {props.post.body}</p>
                    {/* <button className="btn btn-primary"><Link to="/Posts">Back</Link></button> */}
                    <a href={`/posts`} className="btn btn-primary">Back</a>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        post: state.posts.find(post => post.id === parseInt(id))
    }
}
export default connect(mapStateToProps)(PostShow)
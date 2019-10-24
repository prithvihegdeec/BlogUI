import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function PostShow(props) {
    return (
        <div>
            {props.post && (
                <div>
                    <p>Title: {props.post.title}</p>
                    <p>Body: {props.post.body}</p>
                    <button className="btn btn-dark"><Link to="/Posts">Back</Link></button>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        post: state.posts.find(post => post.id == id)
    }
}
export default connect(mapStateToProps)(PostShow)
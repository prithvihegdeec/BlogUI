import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Authors extends React.Component {


    render() {
        return (
            <div>
                <h2>Authors:</h2>

                <ul>
                    {this.props.authors.map(author => {
                        return <li key={author.id}><Link to={`/authors/${author.id}`}>{author.name}</Link></li>
                    })}
                </ul>

            </div>

        )

    }

}


const mapStateToProps = (state) => {
    return {
        authors: state.authors
    }
}

export default connect(mapStateToProps)(Authors)
import React from 'react'
//npm install --save axios@(versionNumber) else latest version will be installed
import axios from 'axios'
import { Link } from 'react-router-dom'

class Authors extends React.Component {
    constructor() {
        super()
        this.state = {
            authors: []
        }
    }


    componentDidMount() {
        //const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(response => {
                const authors = response.data
                this.setState({ authors })
            })
            .catch(err => {
                console.log(err)
            })
    }



    render() {
        return (
            <div>
                <h2>Authors:</h2>

                <ul>
                    {this.state.authors.map(author => {
                        return <li key={author.id}><Link to={`/authors/${author.id}`}>{author.name}</Link></li>
                    })}
                </ul>

            </div>

        )
    }
}

export default Authors
import axios from "axios"

export const setAuthors = (authors) => {
    return {
        type: 'SET_AUTHORS',
        payload: authors
    }
}


export const startSetAuthors = () => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(response => {
                const authors = response.data
                dispatch(setAuthors(authors))
            })
    }
}

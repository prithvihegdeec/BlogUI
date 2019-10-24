const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POSTS': {
            return [].concat(state, action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default postReducer

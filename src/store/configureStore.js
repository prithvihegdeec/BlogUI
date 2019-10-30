import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import postReducer from '../reducers/postReducer'
import authorReducer from '../reducers/authorReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        posts: postReducer,
        authors: authorReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore

import { createStore, combineReducers, applyMiddleware } from 'redux'

//npm install --save redux-thunk
import thunk from 'redux-thunk'
import postReducer from '../reducers/postReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        posts: postReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore

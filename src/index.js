import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


import configureStore from './store/configureStore';
import { startSetPosts } from './actions/posts';
import { startSetAuthors } from './actions/authors';


// setup redux store 
const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())

})

//all page reloads, data is to be fetched from the server and put in redux is written in index.js

store.dispatch(startSetPosts())
store.dispatch(startSetAuthors())

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

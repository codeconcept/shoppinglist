import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';

const articlesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ARTICLE':
            console.log('ADD_ARTICLE reducer');
            console.log('action ', action);
            action.payload.id = Date.now();
            const newState = [...state, action.payload];
            return newState;
        case 'REMOVE_ARTICLE':
            console.log('REMOVE_ARTICLE');
            return state.filter(article => article.id !== action.payload);
        default:
            return state;    
    }
};

const store = createStore(combineReducers({articles: articlesReducer}),
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

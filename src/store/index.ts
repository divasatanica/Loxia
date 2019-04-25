import {createStore, combineReducers, applyMiddleware, compose, Middleware} from 'redux';

import { reducers as editorReducers } from '../pages/Editor/index';

const reducer = combineReducers({
    editor: editorReducers
});

const middleWares: Middleware[] = [];

const storeEnhancer = compose(
    applyMiddleware(...middleWares)
)

export default createStore(reducer, {}, storeEnhancer);
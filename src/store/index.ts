import {createStore, combineReducers, applyMiddleware, compose, Middleware} from 'redux';

const reducer = combineReducers({

});

const middleWares: Middleware[] = [];

const storeEnhancer = compose(
    applyMiddleware(...middleWares)
)

export default createStore(reducer, {}, storeEnhancer);
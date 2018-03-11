import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger';

const middleWare = [];

if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger);
}

export default createStore(reducers, applyMiddleware(...middleWare));
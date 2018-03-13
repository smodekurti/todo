import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger';


const fbConfig = {
    apiKey: 'AIzaSyCTUERDM-Pchn_UDTsfhVPiwM4TtNIxots',
    authDomain: 'redux-firebasev3.firebaseapp.com',
    databaseURL: 'https://redux-firebasev3.firebaseio.com'
  }

const middleWare = [];

if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger);
}

export default createStore(reducers, applyMiddleware(...middleWare));
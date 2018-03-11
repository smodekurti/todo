import React from 'react';
import Home from './app/screens/Home';
import {Provider} from 'react-redux';
import store from './app/config/store';

export default () => (
    <Provider store={store} children='false'>
        <Home />
    </Provider>

)



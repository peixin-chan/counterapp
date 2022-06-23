import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import Count from './Count'

ReactDOM.render(
    <Provider store={store}>
        <Count/>
    </Provider>,
    document.getElementById('root')
);

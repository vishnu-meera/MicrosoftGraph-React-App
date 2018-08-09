//Startup point for the client side app
import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import {createStore,applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {renderRoutes} from 'react-router-config';

const axiosInstance = axios.create({
    baseURL:'https://graph.microsoft.com/v1.0'
});

const store = createStore(reducers,
                window.INITIAL_STATE,
                applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    ,document.querySelector('#root'));

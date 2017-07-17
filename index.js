import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './src/routes';
import configureStore from './src/store/configureStore';
import { loadCourses } from './src/actions/courseActions';
import './src/styles/styles.css';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

ReactDom.render(
    <Provider store={store}>
    <Router history={browserHistory}>{routes()}</Router>
    </Provider>,
    document.getElementById('app')
);

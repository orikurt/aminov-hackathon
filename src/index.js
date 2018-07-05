import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import 'react-table/react-table.css'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route
                to="/"
                component={App}
            />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

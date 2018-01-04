import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';

import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>, document.getElementById('root'));
registerServiceWorker();
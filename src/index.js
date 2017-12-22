import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>, document.getElementById('root'));
registerServiceWorker();




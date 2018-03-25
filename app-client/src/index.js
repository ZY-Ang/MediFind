import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <App />
), document.getElementById('root'));
registerServiceWorker();

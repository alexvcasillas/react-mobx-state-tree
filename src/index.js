import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/common.css';
import App from './containers/app/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

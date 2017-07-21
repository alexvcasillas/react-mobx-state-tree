import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import GithubStore from './stores/github';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/app/app';

import './stylesheets/common.css';

const githubStore = GithubStore.create();
githubStore.fetchFromGithub();

const store = {
  github: githubStore
};

const router = (
  <Provider {...store}>
    <div>
      <App />
    </div>
  </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();

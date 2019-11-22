import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import VideoPage from './components/VideoPage';

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route path ='/' exact component={App} />
    {/* <Route path ='/:id' exact component={VideoPage} /> */}
  </Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

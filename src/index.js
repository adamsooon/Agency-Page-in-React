import ProjectDocument from './ProjectDocument';
import HomepageDocument from './React/HomepageDocument';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={ProjectDocument} >
      <IndexRoute component={HomepageDocument} />
    </ Route>
  </Router>
), document.getElementById('app'));
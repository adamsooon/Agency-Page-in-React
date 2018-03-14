import ProjectDocument from './ProjectDocument';
import HomepageDocument from './React/HomepageDocument';
import AboutDocument from './React/AboutDocument';
import routeMap from './routeMap.json';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path={routeMap.home} component={ProjectDocument} >
      <IndexRoute component={HomepageDocument} />
      <Route path={routeMap.about} component={AboutDocument} />
    </Route>
  </Router>
), document.getElementById('app'));
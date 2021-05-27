import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from '../pages/home/home';
import Tasks from '../pages/tasks/tasks';

const Routes = () => (
  <Switch>
    {/* <Route path="/" exact component={Home} /> */}
    <Route path="/" exact component={Tasks} />
  </Switch>
);

export default Routes;
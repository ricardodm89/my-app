import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home/home';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;
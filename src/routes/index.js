import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RouteDetail from './Route';

import Home from '../pages/Home';
import Repositories from '~/pages/Repositories';
import Commits from '../pages/Commits';
import Notfound from '~/components/NoFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <RouteDetail path="/:filter" exact component={Repositories} />
      <RouteDetail path="/:filter/:repo/commits" exact component={Commits} />
      <Route component={Notfound} />
    </Switch>
  );
}

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Commits from '../pages/Commits';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:filter" exact component={Detail} />
      <Route path="/:filter/commits" component={Commits} />
    </Switch>
  );
}

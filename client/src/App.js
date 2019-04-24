import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Test from './components/Test';
import NoPage from './components/NoPage';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Route component={Navbar} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
        <Route component={NoPage} />
      </Switch>
    </div>
  );
}

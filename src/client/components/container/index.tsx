import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routers } from '@client/constant/router';
import { Login } from '@client/pages/login';

export const Container: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routers.home}>
          <div>home</div>
        </Route>
        <Route path={routers.login}>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

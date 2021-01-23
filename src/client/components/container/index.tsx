import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routers } from '@client/constant/router';
import { Login } from '@client/pages/login';
import { Register } from '@client/pages/register';

export const Container: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routers.home}>
          <div>home</div>
        </Route>
        <Route exact path={routers.login}>
          <Login />
        </Route>
        <Route exact path={routers.register}>
          <Register />
        </Route>
        <Redirect to={routers.login} />
      </Switch>
    </Router>
  );
};

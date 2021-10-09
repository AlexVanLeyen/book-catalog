import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
  Redirect
} from 'react-router-dom';
import './Application.css';
import Header from './components/Header';
import routes from './config/routes';

const Application: React.FunctionComponent<{}> = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {/* This redirect was added for demo convenience */}
              <Redirect to="/books" />
            </Route>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )}
                />
              );
            })}
          </Switch>
      </BrowserRouter>
    </>
  );
};

export default Application;

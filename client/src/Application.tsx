import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
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
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const theme = createTheme();

const Application: React.FunctionComponent<{}> = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Application;

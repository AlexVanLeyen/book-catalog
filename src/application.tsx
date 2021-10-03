import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React, { useEffect } from 'react';
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
import { BookCatalogStore, StoreProvider } from './stores/BookCatalogStore';

const store = new BookCatalogStore();
const theme = createTheme();

const Application: React.FunctionComponent<{}> = () => {
  useEffect(() => {
    (async () => {
      await store.fetchBooks();
    })();
  }, []);
  return (
    <StoreProvider store={store}>
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
    </StoreProvider>
  );
};

export default Application;

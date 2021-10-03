import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
  Redirect
} from 'react-router-dom';
import './application.css';
import routes from './config/routes';
import { BookCatalogStore, StoreProvider } from './stores/BookCatalogStore';

const store = new BookCatalogStore();

const Application: React.FunctionComponent<{}> = () => {
  useEffect(() => {
    (async () => {
      await store.fetchBooks();
    })();
  }, []);
  return (
    <StoreProvider store={store}>
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
    </StoreProvider>
  );
};

export default Application;

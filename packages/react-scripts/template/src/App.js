import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Logout, LoadingView } from '@openmrs/react-components';
import './App.css';
import reduxStore, { history } from './store';
import Layout from './components/layout/Layout';
import LoginPage from './components/login/LoginPage';
import ComponentList from './components/demo/ComponentList';

import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';
import UserSession from './components/login/UserSession';

const { store, persistor } = reduxStore;

const App = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <UserSession />
        <ConnectedRouter history={history}>
          <Switch>
            <Layout component={ComponentList} exact path="/" />

            <Route component={LoginPage} path="/login" />
            <Route component={Logout} path="/logout" />

            {/* Layout */}
            <Layout
              component={() => {
                return (
                  <div>
                    This is a Basic Layout Component with Navbar and Footer
                  </div>
                );
              }}
              path="/layout"
            />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

import createRootReducer from './Reducers';
import mySaga from './Sagas';

import './index.css';
import App from './App';
import CodeRoute from './CodeRoute';

import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routerMiddleware(history)),
  )
);

sagaMiddleware.run(mySaga);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => (<App />)} />
          <Route exact path="/callback" render={() => (<CodeRoute />)} />
          <Route render={() => (<App />)} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

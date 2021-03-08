import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";

import Reducer from './_reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleWare from 'redux-promise';
import ReduxThunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleWare, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
      <BrowserRouter>
          <GlobalStyles />
            <App />
      </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

reportWebVitals();

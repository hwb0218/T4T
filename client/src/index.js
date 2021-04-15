import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Theme from "./styles/theme";

import Reducer from "./_reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleWare from "redux-promise";
import ReduxThunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { composeWithDevTools } from "redux-devtools-extension/index";

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(promiseMiddleWare, ReduxThunk))
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Theme>
        <App />
      </Theme>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

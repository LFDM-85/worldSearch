import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

const store: Store<CountryState, CountryAction> & { dispatch: DispatchType } =
  createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { bindActionCreators } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import configuresStore from "./store/configStore";
const store = configuresStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

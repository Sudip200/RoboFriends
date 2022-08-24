import { createRoot } from "react-dom/client";
import "./styles.css";
import {createStore,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import { Provider ,connect} from "react-redux";
import { searchRobots } from "./reducer";
import App from "./App";
const logger=createLogger()
const store=createStore(searchRobots,applyMiddleware(logger))

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="complete-page-container">
    <Provider store={store}>
     <App />
    </Provider>
  </div>
);

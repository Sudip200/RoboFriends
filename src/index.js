import { createRoot } from "react-dom/client";
import "./styles.css";
import {createStore} from 'redux'
import { Provider ,connect} from "react-redux";
import { searchRobots } from "./reducer";
import App from "./App";
const store=createStore(searchRobots)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="complete-page-container">
    <Provider store={store}>
    <App />
    </Provider>
  </div>
);

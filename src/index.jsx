import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Theme from "../src/Components/Theme/Theme";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = Theme();
root.render(
  <div
    style={{
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.color.primary,
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import { createStore } from "redux";
import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  count: 0,
};

//Store

const store = createStore((state = initialState) => {
  return state;
});

store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "INCREMENT",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

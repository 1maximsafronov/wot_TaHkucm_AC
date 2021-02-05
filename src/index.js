import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import "./sass/style.scss";

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    <App />,
    rootElement
);

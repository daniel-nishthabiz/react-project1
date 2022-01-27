import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./icons";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

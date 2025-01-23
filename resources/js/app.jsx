import React from "react";
import ReactDOM from "react-dom/client";
import ExampleComponent from "./components/ExampleComponent";
import ItemList from "./components/Itemlist";
import DeclutterList from "./components/DeclutterList";
import "../css/app.css" // CSSを一元管理

// ReactアプリケーションをHTML内の要素にレンダリング
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <ExampleComponent />
        <hr />
        <ItemList />
        <hr />
        <DeclutterList />
    </React.StrictMode>
);

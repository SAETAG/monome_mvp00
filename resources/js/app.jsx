import React from "react";
import ReactDOM from "react-dom/client";
import ExampleComponent from "./components/ExampleComponent";
import ItemList from "./components/Itemlist";

// ReactアプリケーションをHTML内の要素にレンダリング
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        {/* <ExampleComponent /> */}
        <ItemList />
    </React.StrictMode>
);

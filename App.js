import { log } from "console";
import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1", {}, "This is main Heading");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

let a;
console.log(a);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement(
//       "h1",
//       { id: "headings" },
//       "Hello World from React with server "
//     )
//   )
// );

// // const heading =
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

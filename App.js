const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "headings" }, "Hello World from React")
  )
);

// const heading =
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

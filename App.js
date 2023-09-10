const header = React.createElement(
  "h1",
  {
    id: "front",
  },
  "Hello World"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

const footer = React.createElement("h1", {}, "Down we are");

root.render(footer);

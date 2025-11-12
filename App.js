const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an H1 tab!"),
    React.createElement("h2", {}, "I'm an H2 tab!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 tab!"),
    React.createElement("h2", {}, "I'm an H2 tab!"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

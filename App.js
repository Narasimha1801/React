const div1 = React.createElement(
  "div",
  { id: "div1" },
  React.createElement("div", { id: "div2" }, [
    React.createElement("h1", { id: "head1", key: "head1" }, "This is h1 Tag"),
    React.createElement("h2", { id: "head2", key: "head2" }, "This is h2 Tag"),
  ]),
);
const root = ReactDOM.createRoot(document.body);
root.render(div1);

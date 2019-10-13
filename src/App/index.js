import Didact from "../Didact/didact";
/** @jsx Didact.createElement */

const element = {
  type: "div",
  props: {
    id: "container",
    children: [
      <h1>Hello World from Didact!</h1>,
      { type: "input", props: { value: "input", type: "text" } },
      { type: "a", props: { href: "/link" } },
      {
        type: "span",
        props: {
          children: [
            { type: "TEXT ELEMENT", props: { nodeValue: "Something" } }
          ]
        }
      }
    ]
  }
};

Didact.render(element, document.getElementById("root"));

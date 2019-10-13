import Didact from "../Didact/didact";

const element = {
  type: "div",
  props: {
    id: "container",
    children: [
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

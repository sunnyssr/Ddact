const TEXT_ELEMENT = "TEXT ELEMENT";
export default {
  render(elem, parentDom) {
    const { type, props } = elem;
    const elementToRender =
      type === "TEXT ELEMENT"
        ? document.createTextNode("")
        : document.createElement(type);

    const isEventListener = propName => propName.startsWith("on");
    Object.keys(props)
      .filter(isEventListener)
      .forEach(eventListener => {
        const eventType = eventListener.slice(2).toLowerCase();
        elementToRender.addEventListener(eventType, props[eventListener]);
      });

    const isAttribute = propName =>
      !isEventListener(propName) && propName !== "children";
    Object.keys(props)
      .filter(isAttribute)
      .forEach(attribute => {
        elementToRender[attribute] = props[attribute];
      });

    const children = props.children || [];
    children.forEach(childElem => {
      this.render(childElem, elementToRender);
    });
    parentDom.appendChild(elementToRender);
  },
  createElement(type, config, ...args) {
    const allChildren = args.length ? [].concat(...args) : [];
    let isObject = obj => obj instanceof Object;
    let props = Object.assign({}, config);
    props.children = allChildren
      .filter(child => child != null && child !== false)
      .map(child => (isObject(child) ? child : this.createTextElement(child)));

    let elem = { type, props };
    return elem;
  },
  createTextElement(value) {
    return this.createElement(TEXT_ELEMENT, { nodeValue: value });
  }
};

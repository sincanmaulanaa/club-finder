class ImageFigure extends HTMLElement {
  constructor() {
    super();

    console.log("constructed");
  }

  connectedCallback() {
    console.log("connected");
  }

  disconnectedCallback() {
    console.log("disconnected");
  }

  adoptedCallback() {
    console.log("adopted");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} changed!`);
  }

  static get observedAttributes() {
    return ["caption", "source"];
  }
}

customElements.define("image-figure", ImageFigure);

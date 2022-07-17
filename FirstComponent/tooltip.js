//class must extend from something, this is a basic vanilla HTML element
class Tooltip extends HTMLElement {
  constructor() {
    console.log("Tooltip class is working");
  }
}

// takes 2 args, single word containing 2 parts and separated by a dash && the JS class that holds the logic for this element (in this case, Tooltip)
customElements.define("nc-tooltip", Tooltip);

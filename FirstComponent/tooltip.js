//class must extend from something, this is a basic vanilla HTML element
class Tooltip extends HTMLElement {
  constructor() {
    //need to call super to execute constructor of base class you're extending
    super()
    this._tooltipText = "Placeholder tooltip text"
    this._tooltipIcon
    this._tooltipVisible = false
    //attachShadow takes JS object as an argument
    this.attachShadow({ mode: "open" })
    //creating template - not trying to accessing DOM at this point, setting up for once it's available
    this.shadowRoot.innerHTML =
      // host - default styling for shadow dom

      `
    <style>
      :host {
        position:relative;
        background-color: var(--color-primary, lightgreen); //first is var, second is default/fallback
      }
      :host-context(p){
        font-weight:bold;
        padding: 0.15rem;
        
      }
      div {
        background-color: black;
        color: white;
        position: absolute;
        top: 2rem;
        left: 0.75rem;
        z-index:10;
        padding: 0.15rem;
        border-radius: 3px;
        box-shadow: 1px 6px 1px rgba(0,0,0,0.26);
        font-weight:normal;
      }
      .hightlight {
        background-color: red
      }

      ::slotted(*){
        color: red
      }

    </style>
    <slot></slot>
    <span> (?)</span>`
  }

  // mounting element to the DOM
  connectedCallback() {
    if (this.hasAttribute("text")) {
      //custom attribute - goes in connectedCallback not constructor
      this._tooltipText = this.getAttribute("text")
    }
    //creating icon - commented out bc created template el instead
    // const tooltipIcon = document.createElement("span")
    // tooltipIcon.textContent = " (?)"
    this._tooltipIcon = this.shadowRoot.querySelector("span")
    //event listener
    this._tooltipIcon.addEventListener(
      "mouseenter",
      this._showTooltip.bind(this)
    ) //bind this referring to the tooltip class
    this._tooltipIcon.addEventListener(
      "mouseleave",
      this._hideTooltip.bind(this)
    )
    //mount and also render for the first time, using render method
    this._render()
  }
  //attributeChangedCallback takes 3 args  - attribute, old value, new value
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return
    }
    if (name === "text") {
      this.tooltipText = newValue
    }
    console.log(name, oldValue, newValue)
  }
  //like a property, but it's accessible from outside component and can only get the value, so it's like a locked down property
  static get observedAttributes() {
    return ["text"]
  }
  //cleanup work
  disconnectedCallback() {
    this._tooltipIcon.removeEventListener("mouseenter", this._showTooltip)
    this._tooltipIcon.removeEventListener("mouseleave", this._hideTooltip)
  }

  // in render method, all logic for accessing shadow DOM - able to quickly see how DOM is being manipulated in the component. Other components handle logic that is used in render. Then call render in those methods when we change something that should trigger a re-render
  _render() {
    let tooltipContainer = this.shadowRoot.querySelector("div")
    if (this._tooltipVisible) {
      tooltipContainer = document.createElement("div")
      tooltipContainer.textContent = this._tooltipText
      this.shadowRoot.appendChild(tooltipContainer)
    } else {
      if (tooltipContainer) {
        this.shadowRoot.removeChild(tooltipContainer)
      }
    }
  }

  //convention to indicate element should only be called w/in the class
  _showTooltip() {
    this._tooltipVisible = true
    this._render()
  }

  _hideTooltip() {
    this._tooltipVisible = false
    this._render()
  }
}
// takes 2 args, single word containing 2 parts and separated by a dash && the JS class that holds the logic for this element (in this case, Tooltip)
customElements.define("nc-tooltip", Tooltip)

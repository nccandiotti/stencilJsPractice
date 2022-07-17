//class must extend from something, this is a basic vanilla HTML element
class Tooltip extends HTMLElement {
  constructor() {
    //need to call super to execute constructor of base class you're extending
    super()
    this._tooltipContainer
    this._tooltipText = "Placeholder tooltip text"
    //attachShadow takes JS object as an argument
    this.attachShadow({ mode: "open" })
    //creating template - not trying to accessing DOM at this point, setting up for once it's available
    this.shadowRoot.innerHTML = `
    <style>
      div {
        background-color: black;
        color: white;
        position: absolute;
        z-index:10;
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
    const tooltipIcon = this.shadowRoot.querySelector("span")
    //event listener
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this)) //bind this referring to the tooltip class
    tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this))

    this.shadowRoot.appendChild(tooltipIcon)
    this.style.position = "relative"
  }
  //convention to indicate element should only be called w/in the class
  _showTooltip() {
    this._tooltipContainer = document.createElement("div")
    this._tooltipContainer.textContent = this._tooltipText
    this.shadowRoot.appendChild(this._tooltipContainer)
  }

  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer)
  }
}
// takes 2 args, single word containing 2 parts and separated by a dash && the JS class that holds the logic for this element (in this case, Tooltip)
customElements.define("nc-tooltip", Tooltip)

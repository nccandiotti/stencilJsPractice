class Modal extends HTMLElement {
  constructor() {
    super()
    this.isOpen = false

    //shadow DOM template ----------------------------------------------------------------
    this.attachShadow({ mode: "open" })
    this.shadowRoot.innerHTML = `
    <style>
    #backdrop {
        position:fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        z-index:10;
        opacity:0;
        pointer-events: none;
    }
    :host([opened]) #backdrop {
        opacity:1;pointer-events:all
    }
    :host([opened]) #modal {
        opacity:1;pointer-events:all
    }

    #modal {
        position:fixed;
        top: 15vh;
        left: 25%;
        width: 50%;
        height: 30rem;
        z-index:100;
        background-color: white;
        border-radius: 3px;
        box-shadow: 0 2px 8px rgba(0,0,0, 0.25);
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        opacity:0;
        pointer-events: none;

    }
    #actions {
        border-top: 1px solid #ccc;
        padding: 1rem;
        display:flex;
        justify-content: flex-end;
    }
    #actions button {
        margin: 0 0.25rem;
    }
    header {
        padding: 1rem;
    }
    header h2 {
        font-size: 1.25rem;
    }
    #main {
        padding: 1rem;
    }
    </style>

    <div id='backdrop'></div>
    <div id="modal">
        <header id="header">
           <slot name="title">Please Confirm Payment</slot>
        </header>
        <section id='main'> 
            <slot></slot>
        </section>
        <section id="actions">
        <button id="cancel-btn">Cancel</button>
        <button id="okay-btn">Okay</button>
        </section>
    
    </div>`
    const slots = this.shadowRoot.querySelectorAll("slot")
    slots[1].addEventListener("slotchange", (event) => {
      console.dir(slots[1].assignedNodes())
    })

    const cancelButton = this.shadowRoot.querySelector("#cancel-btn")
    const confirmButton = this.shadowRoot.querySelector("#okay-btn")
    cancelButton.addEventListener("click", this._cancel.bind(this))
    confirmButton.addEventListener("click", this._confirm.bind(this))
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.hasAttribute("opened")) {
      this.isOpen = true
      // this.shadowRoot.querySelector("#backdrop").style.getPointerEvents =
      //   "all"
      // this.shadowRoot.querySelector("#backdrop").style.opacity = 1
      // this.shadowRoot.querySelector("#modal").style.getPointerEvents = "all"
      // this.shadowRoot.querySelector("#modal").style.opacity = 1
    } else {
      this.open = false
    }
  }

  static get observedAttributes() {
    return ["opened"]
  }

  open() {
    this.setAttribute("opened", "")
    this.isOpen = true
  }

  hide() {
    if (this.hasAttribute("opened")) {
      this.removeAttribute("opened")
    }
    this.isOpen = false
  }
  _cancel(event) {
    this.hide()
    const cancelEvent = new Event("cancel", { bubbles: true, compost: true })
    //dispatch event takes a new event as an arg, this is what we are listening for in the listener on the html
    event.target.dispatchEvent(cancelEvent)
  }

  _confirm() {
    this.hide()
  }
}

customElements.define("nc-modal", Modal)

//Steps
// create class
// below class - customElements.define("nc-component-name", className)
//add script to html and component to body
//constructor + super method
//add shadow dom/shadow root

// if only want to change styles , can use the :host styles in template

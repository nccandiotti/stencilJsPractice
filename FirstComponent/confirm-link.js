//extending html anchor element specifically rather than HTMLElement
class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", (event) => {
      if (!confirm("Do you really want to leave")) {
        //prevent default behavior of anchor tag (redirect to href)
        event.preventDefault()
      }
    })
  }
}
//need 3rd argument, specific element since above not using general HTMLElement
//extends builtin anchor tag
customElements.define("nc-confirm-link", ConfirmLink, { extends: "a" })

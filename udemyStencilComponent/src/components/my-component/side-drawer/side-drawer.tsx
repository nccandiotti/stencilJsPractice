import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'nc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  //Props
  @Prop() title: string = 'default';
  @Prop({ reflect: true }) opened = false;
  //Stencil watching for changes happening on the "inside" (w/in component)
  @State() showContactInfo: boolean = false;

  //Methods
  @Method()
  open() {
    this.opened = true;
  }
  onCloseDrawer() {
    this.opened = false;
  }

  onContentChange(content: string) {
    console.log(content);
    this.showContactInfo = content === 'contact';
    // Stencil automatically will update state, no need to call this.setState()
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-info">
          <h2>Contact Information</h2>
          <p>You can reach us by phone or email.</p>
          <ul>
            <li>Phone : 123-456-7891</li>
            <li>Email: email@email.com</li>
          </ul>
        </div>
      );
    }
    return [
      <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>,
      <aside>
        <header>
          <h2>{this.title}</h2>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'nav')}>
            Navigation
          </button>
          <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'contact')}>
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>,
    ];
    // if (this.opened) {
    // return (
    //   <aside>
    //     <header>
    //       <h1>{this.title}</h1>
    //     </header>
    //     <main>
    //       <slot />
    //     </main>
    //   </aside>
    // );
    // } else {
    //   null;
    // }
  }
}

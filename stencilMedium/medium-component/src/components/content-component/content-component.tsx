import { Component, Host, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'content-component',
  styleUrl: 'content-component.css',
  shadow: true,
})
export class ContentComponent {
  @State() displayCard: boolean = false;
  @State() selectedCard: string = '';

  @Listen('handleDisplayCard', { target: 'body' })
  handleDisplayCard(e: CustomEvent<string>) {
    // this.displayCard = true;
    this.selectedCard = e.detail;
    console.log(e.detail);
  }
  render() {
    let homeCard = (
      <div>
        <p>This is the Home card Content</p>
      </div>
    );

    let aboutCard = (
      <div>
        <p>This is the about card content</p>
      </div>
    );
    let faqCard = (
      <div>
        <p>This is the FAQ Card Content</p>
      </div>
    );

    return (
      <Host>
        {this.selectedCard == 'Home' ? homeCard : null}
        {this.selectedCard === 'About' ? aboutCard : null}
        {this.selectedCard === 'FAQ' ? faqCard : null}
      </Host>
    );
  }
}

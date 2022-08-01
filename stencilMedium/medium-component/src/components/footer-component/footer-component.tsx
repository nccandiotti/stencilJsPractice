import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css',
  shadow: true,
})
export class FooterComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'seach-world',
  styleUrl: 'seach-world.css',
  shadow: true,
})
export class SeachWorld {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

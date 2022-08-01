import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'content-card',
  shadow: true,
})
export class ContentCard {
  render() {
    return (
      <Host>
        <p>Hello from content card</p>
      </Host>
    );
  }
}

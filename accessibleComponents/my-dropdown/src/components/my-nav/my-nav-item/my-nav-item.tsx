import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-nav-item',
  styleUrl: 'my-nav-item.css',
  shadow: true,
})
export class MyNavItem {
  render() {
    return <Host></Host>;
  }
}

import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'nav-component',
  styleUrl: 'nav-component.css',
  shadow: true,
})
export class NavComponent {
  @Prop() links: string[] = ['Home', 'About', 'FAQ'];
  @State() selected: boolean = false;

  @Event({ bubbles: true, composed: true }) handleDisplayCard: EventEmitter;
  handleClick(e) {
    this.handleDisplayCard.emit(e.target.textContent);
  }
  render() {
    return (
      <Host>
        <nav>
          <ul>
            {this.links.map(link => (
              <li role="none">
                <a onClick={e => this.handleClick(e)}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Host>
    );
  }
}

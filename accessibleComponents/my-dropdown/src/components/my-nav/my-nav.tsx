import { Component, Host, h, Prop, State } from '@stencil/core';
import { timingSafeEqual } from 'crypto';

@Component({
  tag: 'my-nav',
  styleUrl: 'my-nav.css',
  shadow: true,
})
export class MyNav {
  @Prop() navLinks: string[] = ['Home', 'About', 'FAQ'];
  @State() selected: boolean = false;
  @State() selectedLink: string = '';

  selectNavLink(e) {
    console.dir(e.target.textContent);
    this.selectedLink = e.target.textContent;
  }
  render() {
    let homeContent = (
      <div>
        <p>This is the home content</p>
        <button>Click to close</button>
      </div>
    );
    return (
      <nav>
        <ul>
          {this.navLinks.map(link => (
            <li role="none">
              <a class={this.selected ? 'selected-link' : ''} aria-expanded={this.selected ? 'true' : 'false'} onClick={e => this.selectNavLink(e)}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        {this.selectedLink === 'Home' ? homeContent : null}
      </nav>
    );
  }
}

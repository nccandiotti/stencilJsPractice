import { Component, h, Prop, State } from '@stencil/core';

//Props from outside of component (can pass in index.html, like disabled for the button component) - add {mutable:true} to be able to change it from within component
//state for changes within component

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop() name: string;
  @State()
  render() {
    let stencilContent = (
      <div>
        <div class="card-custom" id="stencil-div">
          Hello, from Stencil
          <br />
          <br />
          Live Users
          <button class="btn-stencil small-btn">Get Stencil Users</button>
          <br />
        </div>
      </div>
    );
    let reactContent = (
      <div>
        <div class="card-custom" id="react-div">
          Hello, from React <br></br> Live Users
          <button class="btn-react small-btn"> Get React Users</button>
          <br />
        </div>
      </div>
    );
    let mainContent = (
      <div class="my-card-wrapper">
        <h2>Hi, I am {this.name}</h2>
        <button class="btn-stencil">Stencil</button>
        <button class="btn-react">React</button>

        {reactContent}
        {stencilContent}
      </div>
    );

    return mainContent;
  }
}

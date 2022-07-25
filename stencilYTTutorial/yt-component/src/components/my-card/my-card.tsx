import { Component, h, Prop, State } from '@stencil/core';

//Props from outside of component (can pass in index.html, like disabled for the button component) - add {mutable:true} to be able to change it from within component

//state for changes within component

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop({ mutable: true }) name: string;
  @State() APIData: string;
  changeState(): any {
    this.name = 'name has been updated';
    this.APIData = 'we have data from the api';
    this.showCard = true;
  }
  showCard: boolean = false;

  componentWillUpdate(): void {
    console.log('COMPONENTWILLUPDATE');
  }
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
          <button onClick={() => this.componentWillUpdate()} class="btn-react small-btn">
            Get React Users
          </button>
          <br />
        </div>
      </div>
    );
    let mainContent = (
      <div class="my-card-wrapper">
        <h2>Hi, I am {this.name}</h2>
        <button class="btn-stencil">Stencil</button>
        <button onClick={() => this.changeState()} class="btn-react">
          React
        </button>

        {reactContent}
        {stencilContent}
      </div>
    );

    return mainContent;
  }
}

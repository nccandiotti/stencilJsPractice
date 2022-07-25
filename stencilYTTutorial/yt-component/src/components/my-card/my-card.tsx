import { Component, h, Prop, State, Watch } from '@stencil/core';

//Props from outside of component (can pass in index.html, like disabled for the button component) - add {mutable:true} to be able to change it from within component

//state for changes within component

// componentWillUpdate - updates component on state change ?

//watch "watches" new value and old value

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop({ mutable: true }) name: string;
  @State() APIData: string;
  @State() showReactTab: boolean = false;
  @State() showStencilTab: boolean = false;

  changeState(): any {
    this.name = 'name has been updated';
    this.APIData = 'we have data from the api';
    this.showCard = true;
  }

  showCard: boolean = false;

  //   componentWillUpdate(): void {
  //     console.log('COMPONENTWILLUPDATE');
  //   }
  //   @Watch('name')
  //   watchHandler(newValue: boolean, oldValue: boolean) {
  //     console.log('the New Value of name is ' + newValue + ' old value' + oldValue);
  //   }
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
          <button class="btn-react small-btn">Get React Users</button>
          <br />
        </div>
      </div>
    );
    let mainContent = (
      <div class="my-card-wrapper">
        <h2>Hi, I am {this.name}</h2>

        <button onClick={() => (this.showStencilTab = !this.showStencilTab)} class="btn-stencil">
          Stencil
        </button>
        <button onClick={() => (this.showReactTab = !this.showReactTab)} class="btn-react">
          React
        </button>
        {this.showCard ? <p>We have data from the API</p> : null}
        {this.showReactTab ? reactContent : null}
        {this.showStencilTab ? stencilContent : null}
      </div>
    );

    return mainContent;
  }
}

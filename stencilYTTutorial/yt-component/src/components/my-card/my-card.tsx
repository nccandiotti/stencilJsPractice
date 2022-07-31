import { Component, h, Prop, State, Watch, Listen } from '@stencil/core';
import { API_KEY } from '../../../global';
//Props from outside of component (can pass in index.html, like disabled for the button component) - add {mutable:true} to be able to change it from within component

//state for changes within component

// componentWillUpdate - updates component on state change ?

//watch "watches" new value and old value

//--------------- lifecycle Methods
//connectedCallback - when component is getting loaded to DOM
//disconnectedCallback - when component is removed from the DOM
//componentWillLoad - this method is only called once, it's a good place to load data asynchronously
//componentWillRender - it's always recommended to make any rendered state updates within componentWillRender()
//componentDidLoad - called once just after the component fully loaded and the first render occurs

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop({ mutable: true }) name: string;
  @Prop() apiKey: string = API_KEY;
  @State() APIData: string;
  @State() showReactTab: boolean = false;
  @State() showStencilTab: boolean = false;
  @State() myStencilUsers: string;
  @State() myReactUsers: string;
  showCard: boolean = false;

  componentWillLoad() {
    this.APIData = 'loading...';
    fetch(this.apiKey)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        var metaData = parsedRes['Meta Data'];
        var timeDateStencil = metaData['1. Information'];
        this.APIData = timeDateStencil;
      });
  }
  //provide name of event as first param, need target:body because the search is a SIBLING in HTML and not child. If it were a child of my-card wouldn't need the target: body
  @Listen('searchNameSelected', { target: 'body' })
  searchNameSelectedHandler(event: CustomEvent<string>) {
    alert('called this method');
    //event.detail gets custom event data
    this.name = event.detail;
  }

  //   changeState(): any {
  //     this.name = 'name has been updated';
  //     this.APIData = 'we have data from the api';
  //     this.showCard = true;
  //   }

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

        {this.APIData}
        <br />
        <br />
        <button onClick={() => (this.showStencilTab = !this.showStencilTab)} class="btn-stencil">
          Stencil
        </button>
        <button onClick={() => (this.showReactTab = !this.showReactTab)} class="btn-react">
          React
        </button>

        {this.showCard ? <p>We have data from the API</p> : null}
        {this.showReactTab ? reactContent : null}
        {this.showStencilTab ? stencilContent : null}

        <h> </h>
        <h3>Two way Data Binding in Stencil</h3>
        <input type="text" class="my-input-textbox" value={this.name} onInput={(e: any) => (this.name = e.target.value)} />
      </div>
    );

    return mainContent;
  }
}

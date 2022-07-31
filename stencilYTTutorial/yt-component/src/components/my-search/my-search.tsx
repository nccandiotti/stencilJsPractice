import { Component, Host, h, State, Prop } from '@stencil/core';
import { API_KEY } from '../../../global.js';

@Component({
  tag: 'my-search',
  styleUrl: 'my-search.css',
  shadow: true,
})
export class MySearch {
  @Prop({ mutable: true }) searchText: string;
  @State() searchResult: {} = {};
  @State() userInput: string;

  onUserInput(event: Event) {
    this.userInput = (event.target as HTMLInputElement).value;
    this.searchText = this.userInput;
  }

  searchFromAPI() {
    fetch('https://www.alphavantage.co/query>function=SYMBOL_SEARCH&keywords=' + this.searchText + `&${API_KEY}`)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        console.log(parsedRes);
        this.searchResult = parsedRes['Meta Data'];
      });
  }
  render() {
    return (
      <div class="main-search-div">
        <input type="text" class="my-input-textbox" value={this.searchText} onInput={this.onUserInput.bind(this)} />

        <button class="btn-react" onClick={this.searchFromAPI.bind(this)}>
          Search It!
        </button>
        <hr />
        <br />
        <br />
        {this.searchResult ? (
          <table id="api-table">
            <tbody>
              {Object.keys(this.searchResult).map(key => (
                <tr>
                  <td>{key}</td>
                  {Object.values(this.searchResult).map(val => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    );
  }
}

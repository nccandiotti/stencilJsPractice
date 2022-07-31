import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'seach-worlds',
  styleUrl: 'seach-worlds.css',
  shadow: true,
})
export class SeachWorlds {
  @Prop({ mutable: true }) searchText: string;
  @State() searchResult: { name: string; marketOpen: string }[] = [];
  @State() userInput: string;

  onUserInput(event: Event) {
    this.userInput = (event.target as HTMLInputElement).value;
    this.searchText = this.userInput;
  }

  searchFromAPI() {
    fetch('https://www.alphavantage.co/query>function=SYMBOL_SEARCH&keywords=' + this.searchText + `&${process.env.API_KEY}`)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        var metaData = parsedRes['bestMatches'];
        this.searchResult = metaData.map(d => {
          return {
            name: d['2. name'],
            marketOpen: d['5. marketOpen'],
          };
        });
        console.log(this.searchResult);
      });
  }
  render() {
    return (
      <p>hi</p>
      // <div class="main-search-div">
      //   <input type="text" class="my-input-textbox" value={this.searchText} onInput={this.onUserInput.bind(this)} />

      //   <button class="btn-react" onClick={this.searchFromAPI.bind(this)}>
      //     Search It!
      //   </button>
      //   <hr />
      //   <br />
      //   <br />
      //   <table id="api-table">
      //     {this.searchResult.map(r => (
      //       <tr>
      //         <td>{r.name}</td>
      //         <td>{r.marketOpen}</td>
      //       </tr>
      //     ))}
      //   </table>
      // </div>
    );
  }
}

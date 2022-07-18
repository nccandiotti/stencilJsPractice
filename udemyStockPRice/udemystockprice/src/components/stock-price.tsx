import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
  //stylse scoped to component bc shadow = true
})
export class StockPrice {
  @State() stockPrice: number = 0;

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    console.log('submitted');
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${process.env.AV_API_KEY}`)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        this.stockPrice = parseInt(parsedRes['Global Quote']['05. price']);
        console.log(this.stockPrice);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id="stockSymbol" type="text" />
        <button type="submit">Fetch</button>
      </form>,
      <div>
        <p>Price: ${this.stockPrice}</p>
      </div>,
    ];
  }
}

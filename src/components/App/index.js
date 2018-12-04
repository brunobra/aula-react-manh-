import React, { Component } from 'react';
import './App.css';

import Cart from '../Cart';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Produto 1',
        price: 10
      },
      {
        id: 2,
        name: 'Produto 2',
        price: 10
      }
    ]
  }

  deleteProduct() {
    console.log('Delete product')
  }

  render() {
    return (
      <div className="App">
        <Cart
          products={this.state.products}
          onDeleteProduct={this.deleteProduct}
        />
      </div>
    );
  }
}

export default App;

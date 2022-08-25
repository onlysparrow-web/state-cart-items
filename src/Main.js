import React, { Component } from "react";

import Product from "./product";
import Firstone from "./Firstone";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      products: [
        { id: 1, name: "mouse", qty: 1 },
        { id: 2, name: "camera", qty: 1 },
        { id: 3, name: "mic", qty: 1 },
      ],
    };
  }
  adding = (info) => {
    var a = this.state.cartItems;
    var b = info.id;
    console.log(a);
    var d = a.some((p) => p.id == b);
    console.log(d);
    if (d == false) {
      this.setState({ cartItems: [...this.state.cartItems, info] });
      console.log("id of product", info.id);
    } else {
      info.qty += 1;
      this.setState({ cartItems: [...this.state.cartItems] });
    }
  };
  removing = (prod) => {
    console.log("removing", prod);
    var a = this.state.cartItems;
    var b = prod.id;
    console.log(a);
    var d = a.some((p) => p.id == b);
    console.log(d);
    if (d == true) {
      let index = a.indexOf(prod);
      prod.qty = 1;
      console.log(index);
      a.splice(index, 1);
      this.setState({ cartItems: [...this.state.cartItems] });
    } else {
      console.log("not present");
    }
  };

  render() {
    return (
      <div>
        {this.state.products.map((item, index) => (
          <Product key={index} obj={item} add={this.adding} />
        ))}
        {this.state.cartItems.map((items, index) => (
          <Firstone key={index} cart={items} del={this.removing} />
        ))}
      </div>
    );
  }
}

export default Main;

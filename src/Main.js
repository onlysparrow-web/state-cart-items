import React, { Component } from "react";

import Product from "./product";
import Firstone from "./Firstone";
import "./Main.css";
import mouse from "./assets/mouse1.png";
import cam from "./assets/camera.jpg";
import mic from "./assets/mic.jpg";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      products: [
        { id: 1, name: "Mouse", qty: 1, img: mouse },
        { id: 2, name: "Camera", qty: 1, img: cam },
        { id: 3, name: "Mic", qty: 1, img: mic },
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
  addcart = (infos) => {
    infos.qty += 1;
    this.setState({ cartItems: [...this.state.cartItems] });
  };
  minuscart = (infos) => {
    if (infos.qty == 1) {
      this.removing(infos);
    } else {
      infos.qty--;
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
      console.log(a);
      this.setState({ cartItems: [...this.state.cartItems] });
    } else {
      console.log("not present");
    }
  };

  render() {
    return (
      <div>
        <div className="products">
          {this.state.products.map((item, index) => (
            <Product key={index} obj={item} add={this.adding} />
          ))}
        </div>
        <div className="cart">
          {this.state.cartItems.map((items, index) => (
            <Firstone
              key={index}
              cart={items}
              adds={this.addcart}
              del={this.removing}
              minus={this.minuscart}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;

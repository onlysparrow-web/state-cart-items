import React, { Component } from "react";
import "./Firstone.css";

export class Firstone extends Component {
  removeItem = () => {
    console.log("cartItem", this);
    this.props.del(this.props.cart);
  };
  addToCart = () => {
    console.log("product", this);
    this.props.adds(this.props.cart);
  };
  minus = () => {
    this.props.minus(this.props.cart);
  };
  render() {
    return (
      <div>
        <h1>{this.props.cart.name}</h1>
        <h2>Quantity :{this.props.cart.qty}</h2>
        <img className="image" src={this.props.cart.img} />
        <br></br>
        <button onClick={this.removeItem}>Remove</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.addToCart}>+</button>
      </div>
    );
  }
}

export default Firstone;

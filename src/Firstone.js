import React, { Component } from "react";

export class Firstone extends Component {
  removeItem = () => {
    console.log("cartItem", this);
    this.props.del(this.props.cart);
  };
  render() {
    return (
      <div>
        <h1>{this.props.cart.name}</h1>
        <h2>{this.props.cart.qty}</h2>
        <button onClick={this.removeItem}>Remove</button>
      </div>
    );
  }
}

export default Firstone;

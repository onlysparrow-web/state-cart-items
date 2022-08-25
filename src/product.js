import React, { Component } from "react";

export class Product extends Component {
  addToCart = () => {
    console.log("product", this);
    this.props.add(this.props.obj);
  };

  render() {
    return (
      <div>
        <h1>{this.props.obj.name}</h1>
        <button onClick={this.addToCart}>Add to cart</button>
      </div>
    );
  }
}

export default Product;

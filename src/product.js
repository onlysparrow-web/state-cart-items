import React, { Component } from "react";
import "./products.css";

export class Product extends Component {
  addToCart = () => {
    console.log("product", this);
    this.props.add(this.props.obj);
  };

  render() {
    return (
      <div>
        <h1>{this.props.obj.name}</h1>
        <img src={this.props.obj.img} />
        <br></br>
        <button onClick={this.addToCart}>Add to cart</button>
      </div>
    );
  }
}

export default Product;

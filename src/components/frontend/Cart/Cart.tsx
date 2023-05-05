import React from "react";
import "./Cart.css";

// we inport interface to omit the error
import { IItems } from "../../backend/data/data";

const Cart: React.FC<{
  cartItems: IItems[] | any;
  handleAddProduct: Function;
  handleRemoveProduct: Function;
  handleCartCleaner: Function;
}> = (props) => {
  // calculate total price of the items here
  // 0 here is initial value that we can pass myself
  // we multiply item.quantity by item.price and add it to price accumulator
  const totalPrice: number = props.cartItems.reduce(
    (price: number, item: IItems) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-items">
      <h2 className="cart-items-header">Cart Items</h2>
      <div className="clear-cart">
        {props.cartItems.length >= 1 && (<button className="clear-cart-button" onClick={() => props.handleCartCleaner()}>Clear Cart</button>)}
      </div>
      {props.cartItems.length === 0 && (
        <div className="cart-items-empty">No items are added.</div>
      )}
      <div>
        {props.cartItems.map((item: any) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => props.handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => props.handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * ${item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total Price
        <div className="cart-items-total-price">${totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;

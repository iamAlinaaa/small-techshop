import React from "react";

// we inport interface to omit the error
import data, { IItems } from "./components/backend/data/data";
import Header from "./components/frontend/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AllRouters from "./components/frontend/AllRouters/AllRouters";

import "./App.css";
import { useState } from "react";

function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState<IItems[]>([]);

  interface ICartItems extends IItems {
    quantity: number;
  }

  function handleAddProduct(product: IItems): void {
    // check if product exists through all array
    const ProductExists = cartItems.find(
      (item: IItems) => item.id === product.id
    );
    // if product already exists
    if (ProductExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExists, quantity: ProductExists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveProduct(product: IItems) {
    // check if product exists through all array
    const ProductExists: any = cartItems.find((item) => item.id === product.id);
    // to delete product if it is just one
    if (ProductExists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExists, quantity: ProductExists.quantity - 1 }
            : item
        )
      );
    }
  }

  // function that will help clear all the items from the cart by one click
  function handleCartCleaner() {
    // we just set cart items array to an empty array
    setCartItems([]);
  }

  return (
    <Router>
      {/* with purpose to see how many items are in the cart we pass cartItems as props */}
      <Header cartItems={cartItems}/>
      {/* we pass productItems as the props to the products */}
      <AllRouters
        productItems={productItems}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartCleaner={handleCartCleaner}
      />
    </Router>
  );
}

export default App;

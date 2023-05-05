import React from "react";
import { Route, Routes } from "react-router-dom";

// all components for routing
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";

// we inport interface to omit the error
import { IItems } from "../../backend/data/data";

// React.FC<{ item: string }> = (props) =>
const AllRouters: React.FC<{
  productItems: IItems[];
  cartItems: IItems[];
  handleAddProduct: Function;
  handleRemoveProduct: Function;
  handleCartCleaner: Function;
}> = (props) => {
  return (
    <>
      <Routes>
        {/* here we write element (instead of component ????), to clean an error */}
        <Route
          path="/"
          element={
            <Products
              productItems={props.productItems}
              handleAddProduct={props.handleAddProduct}
            />
          }
        ></Route>

        {/* and i guess we use component when we dont pass props */}
        <Route path="/signup" Component={Signup} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={props.cartItems}
              handleAddProduct={props.handleAddProduct}
              handleRemoveProduct={props.handleRemoveProduct}
              handleCartCleaner={props.handleCartCleaner}
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AllRouters;

{
  /* <Products productItems={props.productItems}/> */
}

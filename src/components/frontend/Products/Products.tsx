import React from "react";
import "./Products.css";

// we inport interface to omit the error
import { IItems } from "../../backend/data/data";

const Products: React.FC<{ productItems: IItems[]; handleAddProduct:Function}> = (props) => {
  return (
    <div className="products">
      {/* we call map function with puprose to loop through all our elements */}
      {props.productItems.map((productItem) => (
        <div className="card">
          <div>
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
            />
          </div>
          <div>
            <h3 className="product-name">{productItem.name}</h3>
          </div>
          <div className="product-price">${productItem.price}</div>
          <div>
            <button className="product-add-button" onClick={() => props.handleAddProduct(productItem)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

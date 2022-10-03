import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export const Products = (props) => {
  const { products, increaseQuantity, decreaseQuantity, addToFavorites } = props;

  return (
    <div>
      {products.map(({ id, name, quantity }) => (
        <div className="productContainer" key={id}>
          <div className="productTitle">
            {name}<br/>
            Quantity : {quantity}
          </div>
          <div className="productButtons">
            <button className="btn btn-primary" onClick={() => increaseQuantity(id)}>+</button>
            <button className="btn btn-danger" onClick={() => decreaseQuantity(id)}>-</button>
            <button className="btn btn-warning" onClick={() => addToFavorites(id)}>&#x2605;</button>
          </div>
        </div>
      ))}
    </div>
  );
};

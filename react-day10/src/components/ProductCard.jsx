import React from "react";
import QuantityControl from "./QuantityControl";

const ProductCard = ({
  quantity,
  price,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const totalPrice = quantity * price;
  return (
    <>
      <h1>Laptop</h1>
      <h3>Price : ₹{price}</h3>
      <QuantityControl
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <h3>Total Price : ₹{totalPrice}</h3>
    </>
  );
};

export default ProductCard;

import React from 'react'

const QuantityControl = ({quantity,increaseQuantity,decreaseQuantity}) => {
  return (
    <div>
      <button onClick={decreaseQuantity}>-</button>
      {quantity}
      <button onClick={increaseQuantity}>+</button>
    </div>
  )
}

export default QuantityControl;
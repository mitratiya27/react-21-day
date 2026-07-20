import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App(){
  const price=50000;
  const [quantity,setQuantity] = useState(1)

  function increaseQuantity(){
    setQuantity(quantity + 1);
  }
  
  function decreaseQuantity(){
  if(quantity >1) setQuantity(quantity - 1);
  }

  return(
    <>
    <ProductCard quantity={quantity} 
                 price={price} 
                 increaseQuantity={increaseQuantity}
                 decreaseQuantity={decreaseQuantity}/>
    </>
  );
}

export default App;

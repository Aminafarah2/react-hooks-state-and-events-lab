import React,{ useState } from "react";

function Item({ name, category }) {

  let [inCart,setinCart]=useState(false)

  
  function AddToCart(){
    setinCart((inCart)=(!inCart))
  }
  return (
    <li className={inCart? "in-cart" :""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart? "remove":"add"} onClick={AddToCart}>{inCart ? "Remove From Cart": "Add To Cart"} </button>
    </li>
  );
}

export default Item;

import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./Cart.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

 

  const addHandler =(i)=>{
    console.log("cart items ",cartCtx)
   cartCtx.addItem(i)
    // const findeditem = cartCtx.items.find(i=>i.id===id)
    // console.log("finded item",findeditem);
    // console.log("ctxx befor",cartCtx)
    // const updatedQty = "1";
    // cartCtx.addItem({...findeditem,quantity:updatedQty})
    
    // console.log("ctxx after",cartCtx.items)
    // console.log("after add button",{...findeditem,quantity:updatedQty})


  }

  const removeHandler = id =>{
       cartCtx.removeItem(id)

  }
//   const outputArray = cartCtx.items.reduce((acc, curr) => {
//     const existingEntry = acc.find((item) => item.name === curr.name);
//     if (existingEntry) {
//       existingEntry.quantity = +existingEntry.quantity + +curr.quantity;
//     } else {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);

  

  //console.log(outputArray);

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((i) => (
        <CartItem
          key={i.id}
          id={i.id}
          name={i.name}
          quantity={i.quantity}
          price={i.price}
          onRemove={()=>removeHandler(i.id)}
          onAdd={()=>addHandler(i)}
        />
      ))}
    </ul>
  );

//   let totalAmount = 0;
//   outputArray.forEach(
//     (i) => (totalAmount = totalAmount + Number(i.quantity) * i.price)
//   );
   const totalAmount = cartCtx.items.reduce((curNumber,item)=>{ return curNumber+Number(item.quantity*item.price)},0)

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      {console.log(cartCtx)}
      <div className="total">
        <span>Total amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className="actions">
        <button onClick={props.onHideCart} className="button--alt">
          close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

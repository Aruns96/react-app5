import React from 'react';
import "./Cart.css"
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = <ul className='cart-items'>{[{id:"c1",name:"sushi",amount:2,price:12}].map(i =>  <li>{i.name}</li>)}</ul>
  return (
   
    <Modal onClose={props.onHideCart}>
     {cartItems}
     <div className='total'>
        <span>Total amount</span>
        <span>40</span>
     </div>
     <div className='actions'>
        <button onClick={props.onHideCart} className='button--alt'>close</button>
        <button className='button'>Order</button>
        
     </div>
    </Modal>
  )
}

export default Cart
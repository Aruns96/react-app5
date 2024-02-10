import React ,{useContext} from 'react';
import CartContext from '../../store/cart-context';
import "./Cart.css"
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    

    const outputArray = cartCtx.items
    .reduce((acc, curr) => {
        const existingEntry = acc.find(item => item.name === curr.name);
        if (existingEntry) {
          existingEntry.quantity = +existingEntry.quantity + +curr.quantity;
        } else {
          acc.push(curr);
        }
        return acc;
      }, []);
      
  
console.log(outputArray)
    const cartItems = <ul className='cart-items'>{outputArray.map(i =>  <li key={i.name}>Name:{i.name} Quantity:{i.quantity} Price:{i.price}</li>)}</ul>
    
    let totalAmount =0;
    outputArray.forEach(i=>
       totalAmount=totalAmount+(Number(i.quantity)*i.price )
        )
  return (
   
    <Modal onClose={props.onHideCart}>
     {cartItems}
     {console.log(cartCtx)}
     <div className='total'>
        <span>Total amount</span>
        <span>{totalAmount.toFixed(2)}</span>
     </div>
     <div className='actions'>
        <button onClick={props.onHideCart} className='button--alt'>close</button>
        <button className='button'>Order</button>
        
     </div>
    </Modal>
  )
}

export default Cart
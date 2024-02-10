import React ,{useContext}from 'react';
import "./HeaderCartButton.css";

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
   const cartCtx = useContext(CartContext);
   let quantity =0;
   cartCtx.items.forEach(i=>
      quantity=quantity+Number(i.quantity)
    )

  return (
    <button  className='button' onClick={props.onClick}>
       <span className='icon'>
         <CartIcon />
       </span>
       <span>
          Your cart
       </span>
       <span className='badge'>
       {quantity}
        </span>  
    </button>
  )
}

export default HeaderCartButton
import React ,{useState}from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const[items,setItems] = useState([]);
    const addItemHandler = item =>{
         setItems(prevState=>[...prevState,item])
    }
    const removeItemHandler = id =>{

    }
    const cartContext = {
        items:items,
       
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
  return (
  <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
  )
}

export default CartProvider
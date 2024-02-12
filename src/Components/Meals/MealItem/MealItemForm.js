import React ,{useContext,useState} from 'react';
import "./MealItemForm.css"
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
       const cartCtx =  useContext(CartContext)
       const[quantity,setQuantity] = useState(1);
    const addItemToCartHandler = (e) =>{
         e.preventDefault();
        //  const qty = document.getElementById('amout_'+props.id).value;
         cartCtx.addItem({...props.item,quantity:quantity})
        
        //  console.log("cart items",{...props.item,quantity:qty})

    }
    const qtychangeHandler = (e) =>{
        setQuantity(e.target.value)
    }
  return (
    <form className='form'>
        <Input label="Amount" value = {quantity} onChange={qtychangeHandler} input={{
            id:'amout_'+props.id,
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1"
            
        }} />
        <button onClick={addItemToCartHandler} >+Add</button>
    </form>
  )
}

export default MealItemForm
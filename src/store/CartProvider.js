import React ,{useState}from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const[items,setItems] = useState([]);
    // const addItemHandler = item =>{
    //      setItems(prevState=>[...prevState,item])
    // }
    // const removeItemHandler = id =>{
       
    // }
    
    const addItemHandler=(newItem)=>{
        setItems(prev=>{
            console.log(newItem)
            const duplicateItemIndex=prev.findIndex(prevItem=>prevItem.id===newItem.id)
            if(duplicateItemIndex!==-1){
                const updatedItem = {
                    ...prev[duplicateItemIndex],
                    quantity: prev[duplicateItemIndex].quantity + (newItem.quantity||1)
                  };
                  const newArr = [...prev];
                  newArr[duplicateItemIndex] = updatedItem;
                  return newArr
            }
            else{
                return [...prev,newItem]
            }
        } )
    }
    const removeItemHandler=(id)=>{
        setItems(prev=>{
            const removeItemIndex=prev.findIndex(item=>item.id===id)
            const updatedItem={...prev[removeItemIndex],quantity:(prev[removeItemIndex].quantity-1<0?0:prev[removeItemIndex].quantity-1)}
            if(updatedItem.quantity===0){
                const newArr=prev.filter(item=>item.id!==id)
                return newArr
            }
            else{
                const newArr=[...prev]
                newArr[removeItemIndex]=updatedItem
                return newArr
            }
           
        })
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
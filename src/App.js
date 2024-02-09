import React , {useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";


function App() {

  const[cartShown,setCartShown] = useState(false);

  const showCartHandler = ()=> {
    setCartShown(true)
  }
  const hideCartHandler = ()=>{
    setCartShown(false)
  }
  return (
   <>
   {cartShown && <Cart onHideCart = {hideCartHandler}/>} 
   <Header onShowCart = {showCartHandler}/>
   
   <main>
    <Meals/>
   </main>
   </>
  );
}

export default App;

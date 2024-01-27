import { useState } from 'react';
import './App.css';
import AddCandy from './Components/candy/AddCandy';
import DisplayCandy from './Components/candy/DisplayCandy';
import Cart from './Components/cart/Cart';
import OrderCandy from './Components/cart/OrderCandy';
import CartProvider from './Components/store/CartProvider';

function App() {
  const [shown , setShown ]=useState(false);
  const showCart=()=>{
    setShown(true);
  }
  const hideCart=()=>{
    setShown(false);
  }
  return (
    <div className="App">
      <CartProvider>
        <Cart onOpen={showCart}/>
          <AddCandy/>
          <DisplayCandy/>
          {shown ? <OrderCandy onClose={hideCart}/> :'' }          
      </CartProvider>
    </div>
  );
}

export default App;

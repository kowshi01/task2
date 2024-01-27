import React, { useContext } from 'react'
import Cartcontext from '../store/CartContext'
import './Cart.css'
const OrderCandy = (props) => {
    const ctx=useContext(Cartcontext)
    let total=0;
    const cartItems=(
        <ul>
            {ctx.cartitems.map((item)=>{
              return( 
                <li id={item.id} key={item.id}> 
                    <h3>{item.name}</h3>
                      <span>$ {item.price}</span> 
                      <span>x {item.quantity}</span>
                      <hr />
                </li>
              )
            })}
        </ul>
        );
        
        ctx.cartitems.map((item)=>(
            total+=item.price * item.quantity
        ));
  return (
    <div className='cartDetails'>
        {cartItems}
        <h2 className='totalprice'>Total Price : $ {total}</h2>
        <div className='buttons'>
            <button onClick={props.onClose}>Close</button>
            <button>Order</button>
        </div>
    </div>
  )
}

export default OrderCandy
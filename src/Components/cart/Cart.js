import React, { useContext } from 'react'
import './Cart.css'
import Cartcontext from '../store/CartContext'
import CartIcon from './CartIcon'

const Cart = (props) => {
  const ctx=useContext(Cartcontext)
  
  return (
    <div onClick={props.onOpen} >
      <button className='cartButton'>
        <CartIcon/>
        <span>{ctx.quantity}</span>
      </button>  
    </div>
  )
}

export default Cart
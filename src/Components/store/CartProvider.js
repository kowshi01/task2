import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
  const [addItems, setAddItems] = useState([]);
  const  [addQuantityData ,setAddQuantityData]=useState(0);
  const [addCartItem ,setAddCartItem] =useState([]);
    const addItemHandler=item=>{
        setAddItems((prev)=>{
            return [...prev,item]
        })        
    };
    
    const addQuantityHandler=(qty)=>{
        setAddQuantityData((prev)=> prev+qty);
    }

    const addItemToCartHandler=(item)=>{
        let cartItems=[...addCartItem];
        let hasItemInCart=false;
        cartItems.forEach((storedItem)=>{
            if(storedItem.id===item.id){
            hasItemInCart=true;
            storedItem.quantity=Number(storedItem.quantity)+Number(item.quantity);
            }
        });
        if(hasItemInCart){
            setAddCartItem(cartItems);
        }else{
            setAddCartItem((prevItems)=>{
            return [...prevItems,item]
            })
        }
    }

    const cartContext={
        items : addItems,
        quantity:addQuantityData,
        addQuantity : addQuantityHandler,
        addItem : addItemHandler,
        cartitems : addCartItem,
        addCart : addItemToCartHandler,
        totalAmount :0
    };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
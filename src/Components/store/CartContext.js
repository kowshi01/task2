import React from 'react'

const Cartcontext = React.createContext({
  items : [],
  quantity:0,
  addQuantity:(qty)=>{},
  addItem : (item)=>{},
  cartitems : [],
  addCart:(item)=>{},
  total :0
})

export default Cartcontext
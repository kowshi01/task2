import React, { useContext } from 'react';
import './AddCandy.css';
import Cartcontext from '../store/CartContext';

const DisplayCandy = () => {
    const ctx=useContext(Cartcontext);
    const buttonHandler=(item,count)=>{
        ctx.addQuantity(count)
        ctx.addCart({...item,quantity:count})
    }
   
    
  return (
    <div className='displayCandy'>
        <ul>
            {ctx.items.map((item)=>(
                <li className='listCandy' id={item.id} key={item.id}>
                    <span className='candytitle'>{item.name}</span>
                    <span className='candydescription'>{item.description}</span>
                    <span className='candyprice'>$ {item.price}</span>
                    <button onClick={()=>buttonHandler(item,1)}>Buy 1</button>
                    <button onClick={()=>buttonHandler(item,2)}>Buy 2</button>
                    <button onClick={()=>buttonHandler(item,3)}>Buy 3</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default DisplayCandy
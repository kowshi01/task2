import React, { useContext } from 'react'
import './AddCandy.css'
import Cartcontext from '../store/CartContext'
const AddCandy = () => {
    const ctx=useContext(Cartcontext);
    const addCandyHandler=(e)=>{
        e.preventDefault();
        const candyDetails={
            id: Date.now(),
            name : e.target.candyname.value,
            description : e.target.candydes.value,
            price : e.target.candyprice.value,
        }
        ctx.addItem({...candyDetails});
        e.target.reset();
    }
  return (
    <div className='candyadd'>
        <form onSubmit={addCandyHandler}>
            <input type="text" placeholder='Candy name' name='candyname'/>
            <input type="text" placeholder='Candy description' name='candydes'/>
            <input type="number" placeholder='Candy price' name='candyprice'/>
            <button >Add Candy</button>
        </form>
    </div>
  )
}

export default AddCandy
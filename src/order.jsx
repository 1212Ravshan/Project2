import React from 'react'
import { FaTrash } from 'react-icons/fa';
 const Order =(props) => {
  return (
    
        <div className='item'>
        <img src={"./img/" + props.item.img} />
        <h2>{props.item.title}</h2>
        <p>{props.item.price}</p>
        <FaTrash className='delete' onClick={() => props.onDelete(props.item.id)}/>
        </div>

  )
}
export default Order;
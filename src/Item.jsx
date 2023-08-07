import React, { Component } from 'react'
import { FaHeart } from 'react-icons/fa';
export class  Item extends Component {
  render() {
  return (
   <div className='item'>
    <img src={"./img/" + this.props.item.img} onClick={() => this.props.onshowItem(this.props.item)} />
     <h2>{this.props.item.title}</h2>
     <p>{this.props.item.desc}</p>
     <p>{this.props.item.price}</p>
     <div className='add' onClick={() => this.props.onAdd(this.props.item)}><FaHeart /></div>
   </div>
  )
 }
}
export default Item;
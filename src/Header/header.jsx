import React from 'react'
import { Link} from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';
import Order from '../order';
import Registration from '../Registration/registration';
import './header.scss'

const showOrder = (props) => {
  let summa = 0;
  props.order.forEach(el => summa += Number.parseFloat(el.price))
  return(
       <div className='shop'>
                {props.order.map(el => (
                  <Order onDelete={props.onDelete} key={el.id} item={el}/>
                ))}
                <p className='summa'>Сумма {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  )
}

const showNothing = () => {
  return(
    <div className='empty'>
       <h2>Товаров нет</h2>
    </div>
  )
}

const Header = (props) => {
  const [showRegistration, setShowRegistration] = useState(false);

const handleRegistrationClick = () => {
  setShowRegistration(!showRegistration);
};
  let [cartOpen, setcartOpen] = useState(false);
  return (

    
    <header>
        <div>
           <span className='logo'>ShoppingCart</span>

           <ul>
            <li>
              <Link to='/profile' className='hov'>Изменить профиль</Link>
            </li>
            <li>  <Link to='/registration' className='hov' >
            <AiOutlineUser  onClick={handleRegistrationClick} />Войти </Link></li>
            <li>
              <Link to='/' className='links'>О нас</Link>
              </li>
            <li>
              <Link className='links'>Товары</Link>
              </li>
            <li>
              <Link className='links'>Контакты</Link>
              </li>

           </ul>
           <FaHeart className={`favorite  ${cartOpen && 'active'}`} onClick={() => setcartOpen(cartOpen = !cartOpen)} />

           {cartOpen && (
            <div className='shop'>
               {props.order.length > 0 ?
               showOrder(props) : showNothing()}
            </div>
           )}
       
 
        </div>
        <div className='presentation'>
            
        </div>
     
    </header>
      
       
  )
  
}
export default Header;
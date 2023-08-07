import React from 'react';
import './footer.scss';
import {Link} from 'react-router-dom'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';



const Footer = () => { 

  return (
    <footer>

      <div className="footer-links">
        <div className="footer-section">
          <h3>О нас</h3>
         
          <Link className='link'>Вакансии </Link>
          <Link className='link'>Отзывы </Link>
          <Link className='link'>Инвесторам </Link>
          <Link className='link'>Политика Магазина </Link>
        </div>

        <div className="footer-section">
          <h3>Бизнес партнерам</h3>
          
          <Link className='link'>Условия сотрудничества </Link>
          <Link className='link'>Поставщикам </Link>
          <Link className='link'>Техника для Бизнеса </Link>
          <Link className='link'>Аренда </Link>
        </div>

        <div className="footer-section">
          <h3>Покупателям</h3>
          
          <Link className='link'>Товары </Link>
          <Link className='link'>Акции </Link>
          <Link className='link'>Доставка </Link>
          <Link className='link'>Обмен и возврат </Link>
          <Link className='link'>Гарантия </Link>
          <Link className='link'>Рассрочка </Link>
        </div>
        
        <div className="footer-section">
          <h3>Обратная связь</h3>
          
          <Link className='link'>Контакты </Link>
          <Link className='link'>WhatsApp </Link>
          <Link className='link'>Telegram </Link>
          <Link className='link'>Оставить отзыв о качестве товаров </Link>
          <Link className='link'>Канал в Telegram </Link>
          
        </div>

      </div>
      <hr style={{ width: '100%', height: '0.3px', backgroundColor: 'white' }} />

    
     <div className='oplatasocial'>
      <div className='Oplata'>
        <h3>Мы принимаем к оплате</h3>
        <img src="https://data.kaktus.media/image/big/2016-11-03_15-32-17_628814.jpg" alt="#" />
        <img src="https://st-1.akipress.org/127/.storage/business/images/Nazika/49f04619cf122fe39acf982b09ed416f.png" alt="#" />
        <img src="https://banks.kg/storage/5909/mbank-line.jpg" alt="#" />
        </div>
      <div className="footer-social">
        <h3>Мы в соцсетях</h3>
        {/* Здесь разместите иконки и ссылки на социальные медиа */}
        <Link className='link'><AiOutlineInstagram style={{ width: '64px', height: '34px' }} /></Link>
        <Link className='link'><AiOutlineFacebook style={{ width: '64px', height: '34px' }}/></Link>
        <Link className='link'><AiOutlineTwitter style={{ width: '64px', height: '34px'}}/></Link>
      </div>
      
      </div>
      <hr style={{ width: '100%', height: '0.3px', backgroundColor: 'white' }} />

      <div className='last'>
       <p>Copyright None 2018-2023</p> 
       <p>Политика конфиденциальности</p>
       <p>Публичная оферта</p>
      </div>
    </footer>
  );
};

 export default Footer;

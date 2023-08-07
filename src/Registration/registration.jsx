import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './registration.scss'
import Authenfication from '../Authenfication/auth'
const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  const [userData, setUserData] = useState({});
  const [showauthenfication, setShowauthenfication] = useState(false);

  const handleLoginLinkClick = () => {
    setShowauthenfication(true);
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  useEffect(() => {
    // Fetch user data based on the authentication token
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      fetchUserData(authToken);
    }
  }, []);

  const emailHandle = (e) => {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Неккоректный емайл');
    } else {
      setEmailError('');
    }
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 16) {
      setPasswordError('Пароль должен быть длинее 8 и меньше 16');
    } else {
      setPasswordError('');
    }
  };

  const blur = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const handleRegistration = () => {
    // Perform registration logic here
    // For example, you can call an API to register the account using the email and password values.
    // You can also handle any post-registration actions, like redirecting the user to another page.
    console.log('Registration form submitted!');
  };

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get( " https://github.com/aquinotgr00/react-simple-registration", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

 
  
  

  return (
      <div className="Registration">
        {showauthenfication ? (
          <Authenfication />
        ) : (
          <form>
            <div className='register'>
              <input type='text' placeholder='Логин' />
              {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
              <input
                onChange={emailHandle}
                value={email}
                onBlur={blur}
                name='email'
                type='text'
                placeholder='Email'
                autoComplete='off'
              />
              {(passwordError && passwordDirty) && <div style={{ color: 'red' }}>{passwordError}</div>}
              <input
                onChange={passwordHandle}
                value={password}
                onBlur={blur}
                name='password'
                type='password'
                placeholder='Пароль'
                autoComplete='off'
              />
              <button onClick={handleRegistration} disabled={!formValid}>Зарегистрироваться</button>
              <p>Уже есть аккаунт? <a href='#' target='_self' onClick={handleLoginLinkClick}>Войти</a></p>
            </div>
          </form>
        )}
      </div>
  );
};

export default Registration;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './auth.scss';
import Registration from '../Registration/registration';
import Password from '../Password/fpassw';

const Authenfication= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  const [showRegistration, setshowRegistration] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleDropdownChange = (event) => {
      setSelectedOption(event.target.value);
    };
  const handleLoginLinkClick = () => {
    setshowRegistration(true);
  };

  const handleforgotPassword = () => {
    setShowPassword(true);
  };

  useEffect(() => {
    if (passwordError || !passwordDirty) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [passwordError, passwordDirty]);

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
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://{host}/api/Authentication/Signin?', {
        username,
        password,
      });
      // Save the authentication token to local storage or app state
      localStorage.setItem('authToken', response.data.token);
      // Optionally, you can redirect the user to a dashboard or a different page after successful login
      // window.location.replace('/dashboard');
    } catch (error) {
      console.error('Authentication error:', error);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <div className="Authenfication">
      {showRegistration ? (
        <Registration />
      ) : showPassword ? (
        <Password />
      ) : (
        <form>
          <div className='register'>
            <input
              type='text'
              placeholder='Логин'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {(passwordError && passwordDirty) && <div style={{ color: 'red' }}>{passwordError}</div>}
            <input
              onChange={passwordHandle}
              value={password}
              onBlur={blur}
              name='password'
              type='password'
              placeholder='Пароль'
            />
              <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="Админ">Админ</option>
        <option value="Пользователь">Пользователь</option>
      </select>

            <button onClick={handleLogin} disabled={!formValid} type='submit'>Войти</button>
            <a href='#' type='button' onClick={handleforgotPassword}>Забыли пароль?</a>
            <a href='#' onClick={handleLoginLinkClick}>Зарегистрироваться</a>
          </div>
        </form>
      )}
    </div>
  );
};

export default Authenfication;


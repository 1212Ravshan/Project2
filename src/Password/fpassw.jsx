import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './fpassw.scss';

const Password = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [confirmPasswordError, setConfirmPasswordError] = useState('Пожалуйста, подтвердите пароль');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError || confirmPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, confirmPasswordError]);

  const emailHandle = (e) => {
    setEmail(e.target.value);
    const re = /^[A-Za-z_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
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

  const confirmPasswordHandle = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError('Пароли не совпадают');
    } else {
      setConfirmPasswordError('');
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
      case 'confirmPassword':
        setConfirmPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValid) {
      try {
        // Update the password using API
        await axios.put('https://{host}/api/Authentication/SecureForgotPassword?', {
          email,
          password,
        });
        // Optionally, you can redirect the user to a success page or perform other actions after password update
        console.log('Password updated successfully!');
      } catch (error) {
        console.error('Error updating password:', error);
      }
    }
  };

  return (
    <div className="Password">
      <form onSubmit={handleSubmit}>
        <div className='register'>
          {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
          <input
            onChange={emailHandle}
            value={email}
            onBlur={blur}
            name='email'
            type='text'
            placeholder='Email'
          />
          {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
          <input
            onChange={passwordHandle}
            value={password}
            onBlur={blur}
            name='password'
            type='password'
            placeholder='Новый пароль'
          />
          {(confirmPasswordDirty && confirmPasswordError) && <div style={{ color: 'red' }}>{confirmPasswordError}</div>}
          <input
            onChange={confirmPasswordHandle}
            value={confirmPassword}
            onBlur={blur}
            name='confirmPassword'
            type='password'
            placeholder='Подтвердите новый пароль'
          />
          <button disabled={!formValid} type='submit'>Изменить пароль</button>
        </div>
      </form>
    </div>
  );
};

export default Password;

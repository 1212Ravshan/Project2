import React, { useState, useRef, useEffect } from 'react';
import './profile.scss';

const ProfileEditPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

  const fileInputRef = useRef(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUploadButtonClick = () => {
    // Create the file input ref if it's null
    if (!fileInputRef.current) {
      fileInputRef.current = document.createElement('input');
      fileInputRef.current.type = 'file';
      fileInputRef.current.accept = 'image/*';
      fileInputRef.current.style.display = 'none';
      fileInputRef.current.addEventListener('change', handlePhotoChange);
    }
    // Trigger the hidden file input when the button is clicked
    fileInputRef.current.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the logic to save the profile changes (API call or other operations)
    // In this example, we use a simple console.log to simulate saving the data
    console.log('Profile data:', {
      firstName,
      lastName,
      password,
      photo,
    });
  };

  return (
    <div className='ProfileEditPage'>
      <h2>Редактирование профиля</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <h4>Фотография:</h4>
            {/* Custom button to trigger the file input */}
            <button type='button' className='photozagr' onClick={handleUploadButtonClick}>
              Загрузить фото
            </button>
            {/* Hidden input to handle the file upload */}
            <input type='file' accept='image/*' style={{ display: 'none' }} ref={fileInputRef} />
          </label>
          {photo && (
            <div>
              <img src={photo} alt='User' style={{ width: '100px' }} />
            </div>
          )}
        </div>
        <div>
          <label>
            <h4>Имя:</h4>
            <input type='text' value={firstName} onChange={handleFirstNameChange} />
          </label>
        </div>
        <div>
          <label>
            <h4>Фамилия:</h4>
            <input type='text' value={lastName} onChange={handleLastNameChange} />
          </label>
        </div>
        <div>
          <label>
            <h4>Пароль:</h4>
            <input type='password' value={password} onChange={handlePasswordChange} />
          </label>
        </div>

        <button className='btn' type='submit'>
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default ProfileEditPage;

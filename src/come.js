
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registration from './Registration/registration';
import ProfileEditPage from './Profile/profile';
function Come() {
  return (
    <div className="App">
      <Routes>

        <Route path='/registration' element={<Registration />} />
        <Route path='/profile' element={<ProfileEditPage />} />
      </Routes>
    </div>
  );
}

export default Come;


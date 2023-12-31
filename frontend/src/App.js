import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';

import LoginPage from './Pages/LoginPage';

import RegisterPage from './Pages/RegisterPage';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
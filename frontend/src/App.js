import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';

import LoginPage from './Pages/LoginPage';


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        
      </Routes>
    </div>
  );
};

export default App;
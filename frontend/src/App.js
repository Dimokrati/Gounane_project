import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';

import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import StudentDashBoard from './Pages/StudentDashBoard';
import AdminDashBoard from './Pages/AdminDashBoard';
import GI from './Pages/GI';
import IDSD from './Pages/IDSD';
import ISIL from './Pages/ISIL'
import Isilstudents from './Pages/Isilstudents';
import AddStudent from './Components/AddStudent';
import StudentList from './Components/StudentList';


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/student" element={<StudentDashBoard/>}/>
        <Route path="/admin" element={<AdminDashBoard/>}>
          <Route path="gi" element= {<GI />} />
          <Route path="idsd" element = {<IDSD />}/>
          <Route path="isil" element ={<ISIL />}/>
        </Route>
        <Route path='/admin/isil/students' element={<Isilstudents />}>
          <Route path='add' element={<AddStudent />}/>
          <Route path='student_list' element={<StudentList/>}/>
        </Route>
        
        
          {/* <Route path="idsd" element= {<Idsd />} />
          <Route path="isil" element= {<Isil />} /> */}
        
      </Routes>
    </div>
  );
};

export default App;
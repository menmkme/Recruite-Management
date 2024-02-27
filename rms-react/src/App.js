import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from './components/user/Main';
import Contact from './components/user/pages/Contact';
import Login from './components/user/pages/authentication/Login';
import SignUp from './components/user/pages/authentication/SignUp';
import ForgotPassword from './components/user/pages/authentication/ForgotPassword';
import MatansaDetails from './components/user/Matan_Sa/matansaDetails';


const App = () => {
  return (
    <> 
    <Routes>
      <>
      <Route path='/' element={<Main />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/matansa-details/:id' element = {<MatansaDetails />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/signup' element = {<SignUp />} />
      <Route path='/forgot-password' element = {<ForgotPassword />} />
      </>
    </Routes>
    </>
  )
};

export default App
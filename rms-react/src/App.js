import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from './components/user/Main';
import Contact from './components/user/pages/Contact';


const App = () => {
  return (
    <> 
    <Routes>
      <>
      <Route path='/' element={<Main />} />
      <Route path='/contact' element = {<Contact  hero={Contact}/>} />
      </>
    </Routes>
    </>
  )
};

export default App
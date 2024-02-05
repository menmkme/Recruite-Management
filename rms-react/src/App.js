import React, { useState, useEffect} from 'react';
//import { Routes } from 'react-router-dom';
import Header from './components/user/header/Header'
import MatanSa from './components/user/Matan_Sa/matansa'
import MasuRai from './components/user/Masu_Rai/masuRai'
import Footer from './components/user/footer/footer'
import WmdSkMt from './components/user/death/death'
//import Page from './components/user/pages/page'
import MyComponent from './components/MyComponent'
import {fetchApiData} from './api/api'

import '@fortawesome/fontawesome-free/css/all.min.css';




const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApiData('home');
      if (response && response.status === true) {
        setData(response.data);
      } else {
        console.log(response)
      }
    };
    fetchData();
  }, []);
  console.log(data && data);
  return (
  <> 
  <MyComponent>
    <Header />
    <MatanSa  matansas = {data.matansas}/>
    <MasuRai />
    <WmdSkMt />
    {/* <Page /> */}
    <Footer />
  </MyComponent>
  

  </>
    );
};

export default App
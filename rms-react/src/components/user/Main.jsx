import React, { useEffect, useState } from 'react'
//import { Routes } from 'react-router-dom';
import Header from './header/Header'
import MatanSa from './Matan_Sa/matansa'
import MasuRai from './Masu_Rai/masuRai'
import Footer from './footer/footer'
import WmdSkMt from './death/death'
// import Page from './components/user/pages/page'
// import MyComponent from './components/MyComponent'
import { fetchApiData } from '../../api/api'



import 'tachyons'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loader from '../../services/Loader';

const Main = () => {
  const [loader, setLoader] = useState(true);

  const [data, setData] = useState([])

  useEffect(() => {
    setTimeout(()=> {
      const fetchData = async () => {
        const response = await fetchApiData('home');
        if (response && response.status === true) {
          setData(response.data);
        } else {
          console.log(response)
        }
        setLoader(false);
      };
      fetchData();
    }, 1000);
    
  }, []);
  console.log(data && data);


  return (
    <>
    { loader ? ( <Loader /> ) : (
      <>
      <Header />
      
      <MatanSa matansas={data.matansas} />
       <MasuRai yaransas_alive={data.yaransas_alive}/>
       <WmdSkMt yaransas_dead={data.yaransas_dead}/>
       {/* <Page />  */}
       <Footer />
      </>
    )}
    
     

    </>
  );
    };

export default Main


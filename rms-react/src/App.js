import React from 'react';
//import { Routes } from 'react-router-dom';
import Header from './components/user/header/Header'
import Catagories from './components/user/catagories/catogary'
import FeaturedJobs from './components/user/featuredJobs/featuredJob'
import Footer from './components/user/footer/footer'
import Job from './components/user/jobs/job'
import Page from './components/user/pages/page'


const App = () => {
  return (
  <> 
  <Header />
  <Catagories />
  <FeaturedJobs />
  <Job />
  <Page />
  <Footer />

  </>
    );
};

export default App
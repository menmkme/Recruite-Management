import React, { useEffect, useState } from 'react'
import NavBar from './navigation/NavBar'
import ContactForm from './ContactForm'
import Footer from '../footer/footer'
import Loader from '../../../services/Loader';

const Contact = ({hero, cmp}) => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);
  return (
    <>
        {
            (loader && <Loader />) || (
            <>
                <NavBar hero={hero} cmp="contact" />
                <ContactForm />
                <Footer />
            </>
            
        )}
        

    </>
    );
};

export default Contact
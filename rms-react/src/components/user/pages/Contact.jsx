import React, { useEffect, useState } from 'react'
import NavBar from './navigation/NavBar'
import ContactForm from './ContactForm'
import Footer from '../footer/footer'
import Loader from '../../../services/Loader';

const Contact = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 500);
    }, []);
  return (
    <>
        {
            (loader && <Loader />) || (
            <>
                <NavBar hero="Contact Us" cmp="contact" />
                <ContactForm />
                <Footer />
            </>
            
        )}
        

    </>
    );
};

export default Contact
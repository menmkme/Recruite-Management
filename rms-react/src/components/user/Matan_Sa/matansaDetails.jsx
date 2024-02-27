import React, { useEffect, useState } from 'react'
import NavBar from '../pages/navigation/NavBar'
//import LoginItem from './LoginItem'
import Footer from '../footer/footer'
import Loader from '../../../services/Loader';
import MatansaDetailsItem from './MatansaDetailsItem';
import {fetchApiData} from '../../../api/api';
import { useParams } from 'react-router-dom';
import Yaranta from '../Matan_Sa/yaranta'

const MatansaDetails = () => {
    const { id } = useParams();
    const [loader, setLoader] = useState(true)
    const [matansa, setmatansa] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchApiData(`home/${id}`)
            if(response.status === true) {
                setmatansa(response.data)
            } else {
                console.log(response)
            }
        };
        fetchData()
        setTimeout(() => {
            setLoader(false);
        }, 500);
    }, [id]);
    // console.log(matansa && matansa);
    
  return (
    <>
        {
            
        (
            (loader && <Loader />) ||
            <>
            
            <NavBar matansa={matansa.matansas} cmp="home"/>
            <MatansaDetailsItem  matansas ={matansa?.matansas} />
            <Yaranta yaransas = {matansa?.matansas?.yaransas} />
            <Footer />
            </>
        )
    }
    </>
  )
}

export default MatansaDetails
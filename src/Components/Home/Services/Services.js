import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';



 

const Services = () => {

    const [service,setService] =useState([])

    useEffect(() =>{
        fetch('https://young-gorge-39953.herokuapp.com/getServices')
        .then(response => response.json())
        .then(data =>setService(data))

    },[])



    return (
        <div id="Portfolio" className='container'>
            
            <h1 className=' text-center' style={{fontFamily:'Poppins',marginTop:'20%',marginBottom:'5%'}}>Provide awesome <span style={{color:'#7AB259'}}>services</span> </h1>
           
           <div className='row'>
            {
                service.map((info) =><ServiceCard key={info._id} info={info}></ServiceCard>)
            }

           
            
           </div>
            
       
        </div>
    );
};

export default Services;
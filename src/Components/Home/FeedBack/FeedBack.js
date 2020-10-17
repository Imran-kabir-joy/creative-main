import React, { useEffect, useState } from 'react';
import FeedBackCard from '../FeedBackCard/FeedBackCard';


const FeedBack = () => {

    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch('https://young-gorge-39953.herokuapp.com/reviews')

        .then(response=>response.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div className='container'>
            
        <h1 className=' text-center' style={{fontFamily:'Poppins',marginTop:'10%',marginBottom:'5%'}}>Clients <span style={{color:'#7AB259'}}>Feedback</span> </h1>
       
       <div className='row'>
        {
            reviews.map((feedback) =><FeedBackCard feedback={feedback}></FeedBackCard>)
        }
        
       </div>
        
   
    </div>
    );
};

export default FeedBack;
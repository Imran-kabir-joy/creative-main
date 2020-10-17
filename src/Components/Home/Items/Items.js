import React from 'react';
import Slack from '../../../images/logos/slack.png'
import Google from '../../../images/logos/google.png'
import Uber from '../../../images/logos/uber.png';
import Netflix from '../../../images/logos/netflix.png';
import Airbnb from '../../../images/logos/airbnb.png';
import './Items.css';


const Items = () => {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5 d-flex justify-content-around'>

                <div className='col-md-2 py-3'>
                    <img className='itemImage' src={Slack} alt="" />
                </div>

                <div className='col-md-2 py-3 '>
                    <img className='itemImage' src={Google} alt="" />
                </div>
                <div className='col-md-2  py-3'>
                    <img className='itemImage' src={Uber} alt="" />
                </div>
                <div className='col-md-2 py-3'>
                    <img className='itemImage' src={Netflix} alt="" />
                </div>
                <div className='col-md-2 py-3'>
                    <img className='itemImage' src={Airbnb} alt="" />
                </div>







            </div>




        </div>
    );
};

export default Items;
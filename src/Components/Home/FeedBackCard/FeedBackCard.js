import React, { useContext } from 'react';
import './FeedBackCard.css';
import customer1 from '../../../images/customer-2.png';
import { UserContext } from '../../../App';

const FeedBackCard = ({ feedback }) => {

    const [loggedInUser]=useContext(UserContext)
    return (
        <div className='col-md-4 mt-4'>
            <div className="feedback card" style={{ width: '20rem' }}>

               <div className="container">
               <div className="row py-2">
                    
                    <div className="col-md-3 mt-2">
                        <img style={{ width: '74px', height: '74px' }} className="card-img-top " src={loggedInUser.displayPhoto} />
                    </div>

                    <div className='col-md-9 mt-3'>
                        <h5 style={{fontFamily:'poppins'}}>{feedback.name}</h5>

                        <h6 style={{fontFamily:'poppins'}}>{feedback.designation}</h6>
                    </div>

               
            </div>
               </div>
                <div class="card-body">

                    <p style={{color:'#707070'}} class="card-text">{feedback.review}</p>
                </div>
            </div>
        </div>

    );
};

export default FeedBackCard;
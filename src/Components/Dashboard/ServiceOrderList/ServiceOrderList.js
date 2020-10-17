import React from 'react';

const ServiceOrderList = ({ ser }) => {
    return (
        <div className="customFormStyle m-3">
            <div style={{ width: '18em'}} className="card mt-4 bg-white">
                <div className="py-2 mr-2 ml-3">
                    <img src="" alt="" />
                    <h2 className='mb-3' style={{ fontFamily: 'poppins', fontWeight: "600", fontSize: "20px" }}>{ser.service}</h2>
                    <h5 className='mt-4 text-primary'>{ser.name}</h5>
                    <p className="text-secondary">{ser.projectDetails}</p>
                </div>
            </div>

        </div >

    )
};

export default ServiceOrderList;
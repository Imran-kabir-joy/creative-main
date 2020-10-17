import React, { useEffect } from 'react';
import { useState } from 'react';
import AllOrderList from '../AllOrderList/AllOrderList';

const AllOrder = () => {

   const [allOrder,setAllOrder] =useState([])

   useEffect(()=>{
       fetch('https://young-gorge-39953.herokuapp.com/allOrders')
       .then(response => response.json())
       .then(data=>setAllOrder(data))

   },[])
    return (
        <div style={{ height: '100vh', background: '#F4F7FC' }} className="p-5">
        <div>
            <h1>Services list</h1>
        </div>

        <div>
            <table className="table table-hover ">
                <thead>
                    <tr className='container'>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Details</th>
                       
                    </tr>
                </thead>
            </table>
        </div>
        <div>
            {
                allOrder.map(orderList => <AllOrderList orderList={orderList}></AllOrderList>)
            }
        </div>


    </div>

    );
};

export default AllOrder;
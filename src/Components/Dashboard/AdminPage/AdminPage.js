import React from 'react';
import AllOrder from '../AllOrder/AllOrder';
import LeftSideBar from '../LeftSideBar/LeftSideBar';

const AdminPage = () => {
    return (
        <div className="row">

            <div className="col-md-3">
               <LeftSideBar></LeftSideBar>
            </div>

            <div className="col-md-9">
                <div className="container">
                <AllOrder></AllOrder>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
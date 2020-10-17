import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import LeftSideBar from '../LeftSideBar/LeftSideBar';


const Dashboard = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <section className="dashboard-content">
            <div className="row">
                <div className="col-md-2">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div  className="col-md-10">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'50px', 'margin-top':'20px'}}>{user.name}</h3>
                        
                    </span>
                    
                    <div className="row customer-order-list">
                      
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Dashboard;
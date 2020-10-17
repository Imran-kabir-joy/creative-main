import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faHdd, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faBars, faShoppingBag, faShoppingCart, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../images/logos/logo.png';
import './LeftSideBar.css';
import { UserContext } from '../../../App';

const LeftSideBar = () => {

    const [user,setUser]=useContext(UserContext)
    return (
        <div className='container'>
            <div className="logo-container">
                <Link style={{ textDecoration: 'none' }} to="/"><img className="logo-img" src={logo} alt="" /></Link>
            </div>

           <div className="mt-5">
           
            <div className="menu-item">
                <Link style={{ textDecoration: 'none' }} to='/orderForm'>
                    <h5> <span className="icon-style"><FontAwesomeIcon icon={faShoppingCart} /></span>
                        <span className="dashboard">Order</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link style={{ textDecoration: 'none' }} to='/serviceList'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faShoppingBag} /></span>
                        <span className="dashboard">Service list</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link style={{ textDecoration: 'none' }} to='/postReview'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faCommentAlt} /></span>
                        <span className="dashboard">Review</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link style={{ textDecoration: 'none' }} to='/admin'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faHdd} /></span>
                        <span className="dashboard">All Service list</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link style={{ textDecoration: 'none' }} to='/addService'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faPlus} /></span>
                        <span className="dashboard">Add Service</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link style={{ textDecoration: 'none' }} to='/makeAdmin'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faUserPlus} /></span>
                        <span className="dashboard">Make Admin</span> </h5>
                </Link>
            </div>
           </div>


        </div>
    );
};

export default LeftSideBar;
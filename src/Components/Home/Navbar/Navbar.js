import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
            <img style={{width:'150px',height:'47px'}} src={logo} alt=""/>
           

           <div class="collapse navbar-collapse pt-4" id="navbarSupportedContent">
               <ul class="navbar-nav ml-auto">
                   <li class="nav-item active">
                       <a class="nav-link mr-5 text-dark" href="#home">Home</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link mr-5 text-dark" href="#Portfolio">Our Portfolio</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link mr-5 text-dark" href="#Team">Our Team</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link mr-5 text-dark" href="#Contact">Contact Us</a>
                   </li>

                   <li class="nav-item">
                      <Link style={{ textDecoration: 'none' }} to="/dashboard/:courseName"> <button class="hireButton">Login</button></Link>
                   </li>
                  
                    
                   
               </ul>

           </div>
       </nav>
        </div>
    );
};

export default Navbar;
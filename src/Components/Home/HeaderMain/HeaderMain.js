import React from 'react';
import headerBG from '../../../images/logos/headerBG.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center mb-5'>
        <div className='col-md-4 col-sm-12  offset-md-1'>
            <h1 className='headerText'>Let's grow your<br></br> brand to the <br></br> next level</h1>
            <p className='headerParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis a sit eaque omnis recusandae.</p>

            <button id='Portfolio' className='hireButton'>HIRE US</button>


        </div>
        <div className='col-md-6 col-sm-12'>
            <img src={headerBG} alt="" className='img-fluid'/>

        </div>

   </main>
    );
};

export default HeaderMain;
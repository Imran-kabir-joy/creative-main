import React from 'react';
import './ImageBG.css';
import ImageSlide from '../ImageSlide/ImageSlide'

const ImageBG = () => {
    return (
        <div className='carouselBg row'>
            <div className='container-fluid'>
                <h1 className='carouselHeader pt-5 mt-5 mb-5'>Here are some of <span style={{ color: '#7AB259' }}>our works</span></h1>
                <ImageSlide></ImageSlide>
            </div>

            

        </div>
    );
};

export default ImageBG;
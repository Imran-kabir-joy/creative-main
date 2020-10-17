import React from "react";
import image1 from "../../../images/carousel-1.png";
import image2 from "../../../images/carousel-2.png";
import image3 from "../../../images/carousel-3.png";
import image4 from "../../../images/carousel-4.png";
import image5 from "../../../images/carousel-5.png";
import Carousel from "react-multi-carousel";
import './ImageSlide.css';
import "react-multi-carousel/lib/styles.css";


const ImageSlide = () => {

    const responsive = {
        superLargeDesktop: {
            
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }


        
    };


    return (


        <Carousel responsive={responsive}>
            <div>
                <img className='sliderImage' src={image1} alt="" />
            </div>
            <div >
                <img className='sliderImage' src={image2} alt="" />
            </div>
            <div>
                <img className='sliderImage' src={image3} alt="" />
            </div>
            <div >
                <img className='sliderImage' src={image4} alt="" />
            </div>
            <div >
                <img className='sliderImage' src={image5} alt="" />
            </div>
        </Carousel>

    );
};

export default ImageSlide;


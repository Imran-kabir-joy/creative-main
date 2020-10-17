import React from 'react';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ImageBG from '../ImageBG/ImageBG';
import Items from '../Items/Items';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
           <Header></Header>
           <Items></Items>
           <Services></Services>
           <ImageBG></ImageBG>
           <FeedBack></FeedBack>
           <Footer></Footer>
          
         
            
        </div>
    );
};

export default Home;
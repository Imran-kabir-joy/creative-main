import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id='Contact' className='final'>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-md-5 col-sm-6 mt-5'>
                        <h1 className='footerHeader mt-5 mb-4'>Let us handle your <br></br> project, professionally.</h1>
                        <p className='footerParagraph'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>

                    </div>

                    <div className='col-md-6 col-sm-6 mt-5 offset-md-1'>

                        <form>
                            <div class="form-group mt-5">

                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address" required />

                            </div>
                            <div class="form-group">

                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your Name/ Company's Name" />
                            </div>
                            <div class="form-group">
                                
                                <textarea placeholder="Your Message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <button type="submit" class="hireButton">Send</button>
                        </form>

                    </div>

                </div>

            </div>

           <p style={{ color:'#black'}} className='footerCopy text-center'>@copyright IMRAN Labs 2020</p>

        </footer>
    );
};

export default Footer;
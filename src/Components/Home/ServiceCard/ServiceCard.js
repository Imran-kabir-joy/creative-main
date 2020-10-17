import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';
import { useSpring, animated } from 'react-spring'



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServiceCard = ({ info }) => {


    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    return (

        <Link style={{ textDecoration: 'none' }} to={`dashboard/${info.name}`}>
            <div className='col-md-4 mt-5 mb-5'>
                <div style={{ width: '20em' }} className="service card py-5 d-flex justify-content-center align-items-center">

                    {

                        info.image ? <img style={{ width: '74px', height: '74px' }} src={`data:image/png;base64,${info.image.img}`} alt="" />

                            :
                            <img className="card-img-top" style={{ width: '74px', height: '74px' }} src={info.img} alt="Card image cap" />
                    }




                    <div className="card-body text-center">

                        <animated.div
                            class="animation"
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }}
                        />


                        <h5 style={{ fontFamily: 'poppins', fontWeight: '600' }} class="card-title ">{info.serviceTitle}</h5>

                        <p style={{ color: '#4D4D4D', fontFamily: 'poppins', fontSize: '15px', fontStyle: 'normal' }} class="card-text ">{info.description}</p>

                    </div>
                </div>
            </div>



        </Link>
    );
};

export default ServiceCard;


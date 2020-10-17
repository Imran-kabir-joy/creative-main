import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import './CustomerOrder.css';



const CustomerOrder = () => {

    const { courseName } = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const { register, handleSubmit, errors } = useForm();



    const onSubmit = data => {

        data.orderDate = new Date();
        fetch('https://young-gorge-39953.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Submitted Successfully')
                }

            })
    }




    return (
        <div className="row">

            <div className="col-md-3">
                <LeftSideBar></LeftSideBar>
            </div>
            <div className="col-md-9">

                <div className='container'>
                    <h2 style={{ fontFamily: 'poppins' }} className='mb-4 mt-3'>Order</h2>

                    <div className='row formSection'>
                        <div className='col-md-8 py-5 bg-light'>
                            <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">

                                    <input type="text" ref={register({ required: true })}  name="name" class="form-control" id="exampleInputPassword1" placeholder="Your Name/Company name" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                <div class="form-group">

                                    <input type="email" ref={register({ required: true })}  name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address" />
                                    {errors.email && <span className="text-danger">This field is required</span>}

                                </div>
                                <div class="form-group">

                                    <input type="text" ref={register({ required: true })} class="form-control" id="exampleInputPassword1" name='service' defaultValue={courseName} />
                                </div>
                                <div class="form-group">

                                    <textarea type="text" name="projectDetails" ref={register({ required: true })} style={{ height: '100px' }} placeholder='Project Details' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    {errors.projectDetails && <span className="text-danger">This field is required</span>}
                                </div>
                                <div class="form-group">

                                    <input style={{ width: '150px' }} type="text" name="price" ref={register({ required: true })} class="form-control" id="exampleInputPassword1" placeholder="Price" />

                                    {errors.price && <span className="text-danger">This field is required</span>}


                                </div>

                                <button type="submit" class="hireButton">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className='col-md-4'>

                    </div>



                </div>
            </div>





        </div>


    );
};

export default CustomerOrder;
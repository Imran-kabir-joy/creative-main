import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import LeftSideBar from '../LeftSideBar/LeftSideBar';

const MakeAdmin = () => {

    const { register, handleSubmit, errors } = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const { name, email, photoURL } = loggedInUser;

    const onSubmit = data => {
        fetch('https://young-gorge-39953.herokuapp.com/adminEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })

            .then(response => response.json())
            .then(success => {
                if (success) {
                    alert("Admin email added successfully")
                }
            })
    }


    return (
        <div className='row'>
            <div className='col-md-3'>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='col-md-9'>

                <div className='container '>

                    <h2 style={{ fontFamily: 'poppins' }} className='mb-4 mt-3'>Make Admin</h2>
                    <div className='row formSection'>

                        <form onSubmit={handleSubmit(onSubmit)} className='p-4 bg-light'>
                            <div class="form-group">

                                <input type="email" ref={register({ required: true })} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                {errors.email && <span className="text-danger">This field is required</span>}

                            </div>

                            <button type="submit" class="hireButton">Submit</button>


                        </form>


                    </div>

                </div>
            </div>



        </div>
    );
};

export default MakeAdmin;
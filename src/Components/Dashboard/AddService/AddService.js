import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LeftSideBar from '../LeftSideBar/LeftSideBar';

const AddService = () => {

    const [addService,setAddService]=useState({})
    const [file ,setFile]=useState(null)

    const handleBlur = e => {
        const newService={...addService};
        newService[e.target.name]=e.target.value;
        setAddService(newService)

    }

    const handleFileChange= (e) => {
        const newFile=e.target.files[0];
        setFile(newFile);


    }

    const { register, errors } = useForm();

    const handleSubmit =() => {
        const formData=new FormData()
        console.log(addService)
        formData.append('file',file)
        formData.append('serviceTitle',addService.serviceTitle)
        formData.append('description',addService.description)

        fetch ('https://young-gorge-39953.herokuapp.com/addAService',{
            method: 'POST',
            body: formData
        })
        .then (response=>response.json())
        .then(data=>{
            console.log(data)
        })

        .catch(error=>{
            console.log(error)
        })


    }

    
    return (
        <div className="row">
            <div className="col-md-3">
                <LeftSideBar></LeftSideBar>
            </div>


            <div className="col-md-9 ">
                <div className='container'>
                    <h2 style={{ fontFamily: 'poppins' }} className='mb-4 mt-3'>Add Service</h2>

                    <div className='row formSection'>
                        <div className='col-md-8 py-5 bg-light'>



                            <form onSubmit={handleSubmit} className='p-4 row'>
                                <div className='col-md-7'>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Service Title</label>

                                        <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="serviceTitle" class="form-control" id="exampleInputPassword1" placeholder="Enter Title" />
                                        {errors.serviceTitle && <span className="text-danger">This field is required</span>}
                                    </div>




                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Description</label>
                                        <textarea onBlur={handleBlur} type="text" name="description" ref={register({ required: true })} style={{ height: '100px' }} placeholder='Enter Description' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        {errors.description && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div class="form-group mb-5">
                                        <label for="exampleFormControlFile1">Icon</label>
                                        <input onChange={handleFileChange} type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                    <button type="submit" class="hireButton">Submit</button>
                                </div>



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

export default AddService;
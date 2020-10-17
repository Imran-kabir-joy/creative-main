import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import googleLogo from '../../images/logos/googleLogo.png';
import firebaseConfig from './firebase.config';




const Login = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


  

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }


        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    message: "Logged in successfully"
                }
                setLoggedInUser(signedInUser);
                storeAuthToken();

                history.replace(from);
            })
            .catch(error => {
                const newUser = { message: error.message };
                setLoggedInUser(newUser);
            });


    }


    const storeAuthToken=()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token',idToken);
            
          }).catch(function(error) {
            
          });

    }


    return (
        <div className="container text-center py-5 mt-3">
            <Link to="/">
                <img src={logo} alt="" width="150px" />
            </Link>
            <div className="row mt-5">
                <div className="col-md-3"></div>
                <div className='col-md-6 mt-3' style={{ width: '550px', height: '350px', border: '2px solid lightgrey' }}>
                <h2 className="text-dark mt-5">Login With</h2>

               <div className='p-3'>
               <button onClick={handleGoogleSignIn} className="mt-5 btn btn-light border rounded-pill btn-lg btn-block">
                    <img src={googleLogo} alt="" width="30px" className="mb-1 mr-2" />
                    <span>Continue With Google</span>
                </button>
               </div>

                <h6 className="mt-3">Don't have an account?<button onClick={handleGoogleSignIn} className="btn btn-link mb-2">Create an account</button></h6>
                <h4 className="text-danger mt-5">{loggedInUser.message}</h4>

            </div>
                <div className="col-md-3"></div>
            </div>

           

        </div>
    );
};

export default Login;













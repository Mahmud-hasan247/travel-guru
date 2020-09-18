import React, { useContext, useState } from 'react';
import './Login.css';
import facebook from '../../../src/fb.png';
import google from '../../../src/google.png';
import AnotherHeader from '../AnotherHeader/AnotherHeader';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: '',
        isSignedIn: false
    });

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider).then(result => {
            const { displayName } = result.user;
            const loggedInUser = { name: displayName };
            setSignedInUser(loggedInUser);
            history.replace(from);

        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookLogin = () => {
        firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
            const { displayName } = result.user;
            const loggedInUser = { name: displayName };
            setSignedInUser(loggedInUser);
            history.replace(from);

        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const formValid = (event) => {
        let isFieldValid;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = {...user};
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if(newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                setNewUser(newUserInfo);
                setSignedInUser(newUserInfo);
                history.replace(from);
            })
            .catch(error => {
                var errorMessage = error.message;
                console.log(errorMessage);
              });
        }
        e.preventDefault();
        
        if(!newUser && newUser.email && newUser.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                setNewUser(newUserInfo);
                setSignedInUser(newUserInfo);
                history.replace(from);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
              });
        }
    }


    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };


    return (
        <div>
            <AnotherHeader></AnotherHeader>
            <div className="form">
                <h3 className="text">{newUser ? "Create an account" : "Log In"}</h3>
                <form >

                    <div>
                        {newUser && <input className='getInput' type="text" placeholder="First name" name="first-name" id="" onBlur={formValid} required />}
                    </div>
                    <div>
                        {newUser && <input className='getInput' placeholder="Last name" type="text" name="last-name" id="" onBlur={formValid}  required />}
                    </div>
                    <div>
                        <input className='getInput' placeholder="Email" type="text" name="email" id="" onBlur={formValid}  required />
                    </div>
                    <div>
                        <input className='getInput' type="password" placeholder="Password" name="password" id="" onBlur={formValid}  required />
                    </div>
                    <div>
                        {newUser && <input className='getInput' type="password" placeholder="Confirm password" name="confirm-password" id="" required />}
                    </div>
                    <input className='getInput' onClick={handleSubmit} id='comeIn' type="submit" value={newUser ? 'Create an Account' : "Login"} />
                </form>
                <p id="text">{newUser ? 'Already have an account?' : "Hav'nt account?"} <span onClick={() => setNewUser(!newUser)} id="span">{newUser ? "Login" : "Create account"}</span></p>
            </div>
            <p id="or">Or</p>
            <div className="anotherLogin" onClick={handleFacebookLogin}>
                <p><img src={facebook} alt=""></img>
                    <span>Continue with facebook</span></p>
            </div>
            <div className="anotherLogin" onClick={handleGoogleLogin}>
                <p><img src={google} alt=""></img>
                    <span>Continue with google</span></p>
            </div>
        </div>
    );
};

export default Login;
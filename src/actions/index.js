import axios from 'axios';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import sessionStorage from 'react';
=======
>>>>>>> 604a02102e1b5b9243cf86a9055e3490a7ae4aba
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb

import {
    EMAIL_CHANGED,
     PASSWORD_CHANGED,
     LOGIN_USER_SUCCESS,
     LOGIN_USER_FAIL,
     LOGIN_USER
    } from './types';

export const emailChanged = (email) =>{
    return{
        type:EMAIL_CHANGED,
        payload:email
    };
};

export const passwordChanged = (text) =>{
    return{
        type:PASSWORD_CHANGED,
        payload:text
    };
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
const passtoken = (token) =>{
   
    localStorage.setItem('jwtToken',token);
    // let value = localStorage.getItem('jwtToken');
   
   
}
export const loginUserSuccess = (token) => {
    passtoken(token);
<<<<<<< HEAD
=======
=======

export const loginUserSuccess = (token) => {
    console.log(token);
>>>>>>> 604a02102e1b5b9243cf86a9055e3490a7ae4aba
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
    return{
        type:LOGIN_USER_SUCCESS,
        payload: token
    };
   

    
}; 

export const loginUserFail = () => {
    return {
        type: LOGIN_USER_FAIL

    };
};
export const authStart = () => {
    return {
        type:LOGIN_USER
    };
};


//curly braces implies thsat the function is expected to be called with objects
export const loginUser = ({email,password}) => {
<<<<<<< HEAD
   
=======
<<<<<<< HEAD
   
=======
    console.log(email);
    console.log(password);
>>>>>>> 604a02102e1b5b9243cf86a9055e3490a7ae4aba
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
    return dispatch =>{

       dispatch(authStart());
       let authData ={
        email:email,
        password:password,
        returnSecureToken: true
       };
     axios
     .post('http://localhost:5000/api/auth',authData)
     .then(response =>{
         dispatch(loginUserSuccess(response.data.token));
     })
     .catch(err => {
        dispatch(loginUserFail());
     })  
  
    };
};
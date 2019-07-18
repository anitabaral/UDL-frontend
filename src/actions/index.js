import axios from 'axios';


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

const passtoken = (token) =>{
   
    localStorage.setItem('jwtToken',token);
    // let value = localStorage.getItem('jwtToken');
   
   
}
export const loginUserSuccess = (token) => {
    passtoken(token);
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

    console.log(email);
    console.log(password);

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
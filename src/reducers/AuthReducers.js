import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';
<<<<<<< HEAD
import {Route ,Link ,BrowseRouter as Router} from 'react-router-dom';

import Sidebar from '../superadmin/sidebar';
import { emailChanged } from '../actions';
=======

>>>>>>> 604a02102e1b5b9243cf86a9055e3490a7ae4aba
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: null,
    loading: false,
    token: null

};

<<<<<<< HEAD


=======
>>>>>>> 604a02102e1b5b9243cf86a9055e3490a7ae4aba
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            //make a new object,take all the properties of al the existing object and put it in the new state
            //define the property email and toss it in the state
            //..state produces a brand new object   
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_USER_SUCCESS:
<<<<<<< HEAD
           
        window.location.href='/info'
            
            return {
                ...state,
                error :'',
                token: action.payload,
                email:" ",
                password:" ",
            
            }
        case LOGIN_USER_FAIL:
        console.log('err');
        
            return {
                ...state,
                error: 'authentication Failed',
                email:"",
                password:""
            
=======
            return {
                ...state,
                error :'',
                token: action.payload
            }

        case LOGIN_USER_FAIL:
        console.log('err');
            return {
                ...state,
                error: 'authentication Failed',
>>>>>>> 604a02102e1b5b9243cf86a9055e3490a7ae4aba
            }
        case LOGIN_USER:
            return { ...state, error: '' }
        default:
            return state;
    }
}
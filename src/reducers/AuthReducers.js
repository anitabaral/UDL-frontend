import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

import {Route ,Link ,BrowseRouter as Router} from 'react-router-dom';

import Sidebar from '../superadmin/sidebar';
import { emailChanged } from '../actions';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: null,
    loading: false,
    token: null

};


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
           
        window.location.href='/info'
        

           
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
            
            }
        case LOGIN_USER:
            return { ...state, error: '' }
        default:
            return state;
    }
}
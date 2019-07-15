
import axios from 'axios';

import {
    YEAR_SELECTION,
    SEMESTER_SELECTION,
    GENDER_SELECTION,
    RESULT_SELECTION,
    SEARCH_SUCCESS,
    SEARCH_FALIURE,
    SEARCH
} from './types';

export const yearSelection = (year) => {
    return {
        type:YEAR_SELECTION,
        payload:year
    }
}

export const semesterSelection = (semester) =>{
    return{
        type:SEMESTER_SELECTION,
        payload:semester
    }
    
}

export const genderSelection = (gender) => {
    return {
        type:GENDER_SELECTION,
        payload:gender
    }
}

export const resultSelection = (result) => {
    return {
        type:RESULT_SELECTION,
        payload: result
    }
}

export const searchSuccess = (collection) => {
    console.log(collection)
    return {
        type:SEARCH_SUCCESS,
        payload:collection
    }
}
export const searchFaliure = () => {
    return {
        type:SEARCH_FALIURE
    }
}
 
export const search = (year,semester,gender,result) => {
    let value= localStorage.getItem('jwtToken');
   
    return dispatch => {
         
        

        const headers ={
            "x-auth-token": value,
            "Content-type": "application/json"

        };
        
        let data = {
            year:year,
            gender:gender,


        }
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/query',
            headers:headers,
            body:data
        }).then(response =>{
            
            dispatch (searchSuccess(response.data));
        }).catch(err => {
            dispatch(searchFaliure());
        })


    
  } 

}
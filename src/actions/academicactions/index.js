
import axios from 'axios';

import {
    YEAR_SELECTION,
<<<<<<< HEAD
    FACULTY_SELECTION,
=======
    SEMESTER_SELECTION,
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
    GENDER_SELECTION,
    RESULT_SELECTION,
    SEARCH_SUCCESS,
    SEARCH_FALIURE,
    SEARCH
} from './types';

export const yearSelection = (year) => {
    return {
<<<<<<< HEAD
        type: YEAR_SELECTION,
        payload: year
    }
}

export const facultySelection = (faculty) => {
    return {
        type: FACULTY_SELECTION,
        payload: faculty
    }

=======
        type:YEAR_SELECTION,
        payload:year
    }
}

export const semesterSelection = (semester) =>{
    return{
        type:SEMESTER_SELECTION,
        payload:semester
    }
    
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
}

export const genderSelection = (gender) => {
    return {
<<<<<<< HEAD
        type: GENDER_SELECTION,
        payload: gender
=======
        type:GENDER_SELECTION,
        payload:gender
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
    }
}

export const resultSelection = (result) => {
    return {
<<<<<<< HEAD
        type: RESULT_SELECTION,
=======
        type:RESULT_SELECTION,
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
        payload: result
    }
}

<<<<<<< HEAD
export const searchSuccess = (collections) => {
//  showTable(collections);
    return {
        type: SEARCH_SUCCESS,
        payload: collections
=======
export const searchSuccess = (collection) => {
    console.log(collection)
    return {
        type:SEARCH_SUCCESS,
        payload:collection
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
    }
}
export const searchFaliure = () => {
    return {
<<<<<<< HEAD
        type: SEARCH_FALIURE
    }
}

export const search = (years, semester, gender, result) => {
    let value = localStorage.getItem('jwtToken');
    return dispatch => {
        const headers = {
            "x-auth-token": value,
            "Content-type": "application/json"
        };
        var data1 = JSON.stringify(years);
        axios({
           method:'post',
            headers:headers,
            url:'http://localhost:5000/api/query',
           data: data1
           
        }).then(response => {
            dispatch(searchSuccess(response.data));
        }).catch(err => {
           
=======
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
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
            dispatch(searchFaliure());
        })


<<<<<<< HEAD

    }
=======
    
  } 
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb

}
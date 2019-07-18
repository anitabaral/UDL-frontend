
import axios from 'axios';

import {
    YEAR_SELECTION,
    FACULTY_SELECTION,
    GENDER_SELECTION,
    RESULT_SELECTION,
    SEARCH_SUCCESS,
    SEARCH_FALIURE,
    SEARCH
} from './types';

export const yearSelection = (year) => {
    return {
        type: YEAR_SELECTION,
        payload: year
    }
}

export const facultySelection = (faculty) => {
    return {
        type: FACULTY_SELECTION,
        payload: faculty
    }

}

export const genderSelection = (gender) => {
    return {
        type: GENDER_SELECTION,
        payload: gender
    }
}

export const resultSelection = (result) => {
    return {
        type: RESULT_SELECTION,
        payload: result
    }
}

export const searchSuccess = (collections) => {
//  showTable(collections);
    return {
        type: SEARCH_SUCCESS,
        payload: collections
    }
}
export const searchFaliure = () => {
    return {
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
           
            dispatch(searchFaliure());
        })



    }

}

import {
    YEAR_SELECTION,
    FACULTY_SELECTION,
    GENDER_SELECTION,
    RESULT_SELECTION,
    SEARCH_SUCCESS,
    SEARCH_FALIURE,
    SEARCH
} from '../actions/academicactions/types';

const INITIAL_STATE = {
   year : '',
   faculty: '',
   gender: '',
   result: '',
   collections:[{}]
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case YEAR_SELECTION:
        console.log(action.payload)
            //make a new object,take all the properties of al the existing object and put it in the new state
            //define the property email and toss it in the state
            //..state produces a brand new object   
            return { ...state, year: action.payload }
        case FACULTY_SELECTION:

            return { ...state, faculty: action.payload }
        case GENDER_SELECTION:
            return {
                ...state,             
                gender: action.payload
            }

        case RESULT_SELECTION:
            return {
                ...state,
                result:action.payload   
            }
        case SEARCH_FALIURE:
          console.log("Error");

        case SEARCH_SUCCESS:
        let data = action.payload
        console.log(data)
           return {
               ...state,
               collections:data
           }
        default:
            return state;
    }
    
}

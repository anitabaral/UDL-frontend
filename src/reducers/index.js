import {combineReducers} from 'redux';
import AuthReducers from './AuthReducers';

import AcademicReducer from './AcademicReducer';

export default combineReducers({
    auth:AuthReducers,
    academic:AcademicReducer

});
import { combineReducers } from 'redux';
import { LoginReducer } from './LoginReducer';


const AllReducer = combineReducers({ loginDetails: LoginReducer })

export default AllReducer

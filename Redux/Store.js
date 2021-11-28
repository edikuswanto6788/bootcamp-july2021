
import { createStore, applyMiddleware } from "redux";
import Thunk from 'redux-thunk';
import AllReducer from './Reducers';

const Store = createStore(
    AllReducer,
    applyMiddleware(Thunk))

    export default Store
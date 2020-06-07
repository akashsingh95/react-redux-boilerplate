import { combineReducers } from "redux";
import userReducer from './user';
import activeUser from './activeUser'



const allReducer = combineReducers({
    users:userReducer,
    activeUser:activeUser
});

export default allReducer;
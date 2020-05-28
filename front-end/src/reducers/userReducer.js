import {
    GET_PROFILE_SUCCESS,
    GET_PROFILE_START,
    GET_PROFILE_FAIL,
    UPDATE_PROFILE_START,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL
} from "../actions/profileAction";

import {
    
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
}
from "../actions/registerAction"

import{LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
} from "../actions/loginAction"

import {
    // CREATE_PROFILE_START,
    CREATE_PROFILE_SUCCESS,
    // CREATE_PROFILE_FAIL,
} from "../actions/profileAction"
// import { bindActionCreators } from "redux";


export const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    id: "",
    isFetching: false,
    error: "",
    myIssues: [], 
}
console.log('reducer!!!!!!', initialState.email)
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_START:
            return {
                ...state,
                isFetching: true
            };
        case LOGIN_USER_SUCCESS:
            // localStorage.setItem("token", JSON.stringify(action.token))
            // localStorage.setItem("userID", action.user.id)
            // console.log(action.payload.token)
            return {
                ...state,
                // email: action.user.email,
                username: action.payload.username,
                // first_name: action.user.first_name,
                // last_name: action.user.last_name,
                token: action.payload.token,
                user_id: action.payload.user_id,
                isFetching: false,
                isLoggedIn: true,
            };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case REGISTER_USER_START:
            return {
                ...state,
                isFetching: true
            };
        case REGISTER_USER_SUCCESS:
            // localStorage.setItem("token", JSON.stringify(action.token))

            return {
                ...state,
                username: action.user.username,

                id: action.user.id,
                isFetching: false,
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case GET_PROFILE_SUCCESS:
            localStorage.setItem("userID", action.payload.id)

            return {
                ...state,
                username: action.payload.username,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                zip_code: action.payload.zip_code,
                id: action.payload.id,
                bio: action.payload.bio,
                isFetching: false,
            };
        case GET_PROFILE_START:
            return {
                ...state,
                isFetching: true
            };
        case GET_PROFILE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case UPDATE_PROFILE_START:
            return {
                ...state,
                isFetching: true
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
            case CREATE_PROFILE_SUCCESS:
                return{                  
                    ...state,
                    email: action.payload[0].email,
                    firstName: action.payload[0].firstName,
                    lastName: action.payload[0].lastName,
                    age: action.payload[0].age,
                    user_id: action.payload[0].user_id
                }
        default:
            return state;
    }
}
import { axiosWithAuth } from "../utils/axiosWithAuth"

export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_START = "GET_PROFILE_START";
export const GET_PROFILE_FAIL = "GET_PROFILE_FAIL";
export const UPDATE_PROFILE_START = "UPDATE_PROFILE_START";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAIL = "UPDATE_PROFILE_FAIL";
export const CREATE_PROFILE_START = "CREATE_PROFILE_START"
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS"
export const CREATE_PROFILE_FAIL = "CREATE_PROFILE_FAIL"


export const getProfile = props => {
    
    return dispatch => {
        dispatch({ type: GET_PROFILE_START })
        axiosWithAuth()
            .get('/api/profiles')
            .then(res => {
                
                dispatch({
                    type: GET_PROFILE_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                // console.log({err})
                dispatch({
                    type: GET_PROFILE_FAIL,
                    payload: `${err}`
                })
            })
    }

}

export const updateProfile = props => {
    console.log({ props })
    return dispatch => {
        dispatch({ type: UPDATE_PROFILE_START })
        axiosWithAuth()
            .put(`/api/profiles/${localStorage.getItem("userId")}`, props)
            .then(res => {
                console.log({ res })
                dispatch({
                    type: UPDATE_PROFILE_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                console.log({ err })
                dispatch({
                    type: UPDATE_PROFILE_FAIL,
                    payload: `update profile fail`
                })
            })
    }

}

    export const createProfile = props => {
        return dispatch => {
            dispatch ({ type: CREATE_PROFILE_START })
            axiosWithAuth()
            .post('/api/profiles', props)
            .then((res) => {
                console.log('profile',res.data)
                dispatch({
                    type: CREATE_PROFILE_SUCCESS,
                    payload: res.data,
                })
                
            })
            .catch(err => {
                dispatch({
                    type: CREATE_PROFILE_FAIL,
                    payload: "create profile error"
                })
            })
        }}
        
    




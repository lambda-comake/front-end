import { axiosWithAuth } from "../utils/axiosWithAuth"

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ISSUE = "UPDATE_ISSUE";
export const POST_DATA = "POST_DATA";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axiosWithAuth()
        .get("")
        .then(res => {
            console.log("getData------>", res.data);
            dispatch({ type: UPDATE_ISSUE, payload: res.data })
        })
        .catch(err => {
            console.log("Get Error ------>>>>", err)
        })
}

export const postData = value => dispatch => {
    dispatch({ type: POST_DATA, payload: value })
    axiosWithAuth()
        .post("")
        .then(res => {
            console.log(".post", res)
            dispatch({ type: UPDATE_ISSUE, payload: res.data })
        })
        .catch(err => {
            console.log("Pst error---->>>>", err)
        })
}
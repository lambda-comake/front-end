import {axiosWithAuth} from "../utils/axiosWithAuth"

export const getAllIssues = props => {
    return dispatch => {
        dispatch({type: 'FETCH_ISSUES_START'})
        axiosWithAuth()
        .get('/api/issues')
        .then(resp => {
            dispatch({type: 'FETCH_ISSUES_SUCCESS', payload: resp.data})
        })
        .catch(err => {
            dispatch({type: 'FETCH_ISSUES_FAILURE', payload: err.message})
        })
    }
}
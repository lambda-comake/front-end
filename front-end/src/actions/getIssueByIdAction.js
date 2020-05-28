import {axiosWithAuth} from '../utils/axiosWithAuth'

export const getIssueById = props => {
    return dispatch => {
        dispatch({type: 'FETCH_ISSUEID_START'})
        axiosWithAuth()
        .get(`/api/issues/${id}`)
        .then(resp => {
            dispatch({type: 'FETCH_ISSUEID_SUCCESS', payload: resp.data})
        })
        .catch(err => {
            dispatch({type: 'FETCH_ISSUEID_FAILURE'})
        })
    }
}
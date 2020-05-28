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



export const getIssueById = id => {
    return dispatch => {
        dispatch({type: 'FETCH_ISSUEID_START'})
        axiosWithAuth()
        .get(`/api/issues/${id}`)
        .then(resp => {
            dispatch({type: 'FETCH_ISSUEID_SUCCESS', payload: resp.data})
        })
        .catch(err => {
            dispatch({type: 'FETCH_ISSUEID_FAILURE', payload: err.message})
        })
    }
}

export const submitIssueById = (updateIssue, id) => {
    return dispatch => {
        dispatch({type: 'FETCH_SUBMITID_START'})
        axiosWithAuth()
        .put(`/api/issues/${id}`, updateIssue, id)
        .then(resp => {
            dispatch({type: 'FETCH_SUBMITID_SUCCESS', payload: resp.data, })
        })
        .catch(err => {
            dispatch({type: 'FETCH_SUBMITID_FAIL', payload: err.message})
        })
    }
}

export const submitNewIssue = (issue) => {
    return dispatch => {
        dispatch ({type: 'FETCH_SUBMIT_START'})
        axiosWithAuth()
        .post('/api/issues', issue)
        .then(resp=> {
            dispatch ({type: 'FETCH_SUBMIT_SUCCESS', payload: resp.data, })
        })
        .catch(err => {
            dispatch({type: 'FETCH_SUBMIT_FAIL', payload: err.message})
        })
    }
}
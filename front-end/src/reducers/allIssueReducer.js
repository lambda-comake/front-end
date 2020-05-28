const initialState = {
    issues:
        [
            {
                id: "",
                user_id: "",
                title: "",
                description: "",
                upVotes: 0
            }
        ],
    issue: {},
    isFetching: false,
    error: ""
}

export const allIssueReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ISSUES_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_ISSUES_SUCCESS':
            return {
                ...state,
                isFetching: false,
                issues: action.payload
            }
        case 'FETCH_ISSUES_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case 'FETCH_ISSUEID_START':
            return {
                ...state,
                isFetching: true
            }
        case ' FETCH_ISSUEID_SUCCESS':
            return {
                ...state,
                isFetching: false,
                issue: action.payload
            }
        case 'FETCH_ISSUEID_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            case 'FETCH_SUBMITID_START':
            return {
                ...state,
                isFetching: true
            }
        case ' FETCH_SUBMITID_SUCCESS':
            return {
                ...state,
                isFetching: false,
                issue: action.payload
            }
        case 'FETCH_SUBMITID_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

            case 'FETCH_SUBMIT_START':
            return {
                ...state,
                isFetching: true
            }
        case ' FETCH_SUBMIT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                issue: action.payload
            }
        case 'FETCH_SUBMIT_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }



        default:
            return state;
    }
}

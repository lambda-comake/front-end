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
    isFetching: false,
    error: ""
}

export const allIssueReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ISSUES_START': 
            return{
                ...state,
                isFetching: true
            }
        case 'FETCH_ISSUES_SUCCESS':
            return{
                ...state,
                isFetching: false,
                issues: action.payload
            }
        case 'FETCH_ISSUES_FAILURE':
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }

    default:
        return state;
    }
} 
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

export const getIssueByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ISSUEID_START':
        return{
            ...state,
                isFetching: true
        }
        case ' FETCH_ISSUEID_SUCCESS':
            return{
                ...state,
                isFetching: false,
                issues: action.payload
            }
            case 'FETCH_ISSUEID_FAILURE':
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
    }
}
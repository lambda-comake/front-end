import React, {useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {connect, useDispatch} from "react-redux"
import {useHistory} from 'react-router-dom';
import {getAllIssues} from '../actions/allIssuesAction'


const Issues = props => {
    // const [allIssues, setAllIssues] = useState([]);
    const dispatch = useDispatch()
    const {push} = useHistory();
    const history = useHistory()

    useEffect(() => {
        dispatch(getAllIssues())
        // axiosWithAuth()
        //     .get("/api/issues")
        //     .then((res) => {
        //         setAllIssues(res.data)
        //     })
        //     .catch((err) => {
        //         console.log({ err });
        //     });
    }, [dispatch])

    const deleteIssue = id => {
        axiosWithAuth()
        .delete(`api/issues/${id}`)
        .then( res => {
         console.log('issue deleted') 
         history.go(0)  
        })
        .catch(err => {
            console.log('errr')
        })
    }

    const upVote = issue => {
        const newissue = issue
        const votes = parseInt(issue.upVotes) + 1

        axiosWithAuth()
        .put(`/api/issues/${issue.id }`,{...newissue, upVotes: votes} )
        .then(res => {
            history.go(0)
        })
    }


    return (
        <div>
            <h1>Issues</h1>
            {props.issues.map(issue => {
                return(
                    <div key={issue.id}>
                <p>{issue.title}</p>
                <p>{issue.description}</p>
                <p>{issue.upVotes}</p>
                <button onClick={() => push(`/editIssues/${issue.id}`)}>Edit Issue</button>
                <button onClick={() => deleteIssue(issue.id)}>Delete Issue</button>
                <button onClick={() => upVote(issue)}>Up Vote</button>
                
                </div>
                
                )
            })}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        issues: state.allIssues.issues
    }
}
export default connect(mapStateToProps, {getAllIssues})(Issues);
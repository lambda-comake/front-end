import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const Issues = props => {
    const [allIssues, setAllIssues] = useState([]);

    const {push} = useHistory();
    const history = useHistory()

    useEffect(() => {
        axiosWithAuth()
            .get("/api/issues")
            .then((res) => {
                setAllIssues(res.data)
            })
            .catch((err) => {
                console.log({ err });
            });
    }, [])

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
    
    const upVote = id => {
        
        axiosWithAuth()
        .put(`/api/issues/${id }`, )
    }


    return (
        <div>
            <h1>Issues</h1>
            {allIssues.map(issue => {
                return(
                    <div key={issue.id}>
                <p>{issue.title}</p>
                <p>{issue.description}</p>
                <p>{issue.upVotes}</p>
                <button onClick={() => push(`/editIssues/${issue.id}`)}>Edit Issue</button>
                <button onClick={() => deleteIssue(issue.id)}>Delete Issue</button>
                <button>Up Vote</button>
                
                </div>
                
                )
            })}
            
        </div>
    )
}

export default Issues;
import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const Issues = props => {
    const [allIssues, setAllIssues] = useState([]);

    const {push} = useHistory();

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



    return (
        <div>
            <h1>Issues</h1>
            {allIssues.map(issue => {
                return(
                    <div key={issue.id}>
                <p>{issue.title}</p>
                <p>{issue.description}</p>
                <button onClick={() => push(`/editIssues/${issue.id}`)}>Edit Issue</button>
                </div>
                
                )
            })}
            
        </div>
    )
}

export default Issues;
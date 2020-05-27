import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Issues = props => {
    const [allIssues, setAllIssues] = useState([]);

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
                </div>
                )
            })}
            
        </div>
    )
}

export default Issues;
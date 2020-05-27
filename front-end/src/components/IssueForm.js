import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {useHistory} from "react-router-dom"

const IssueForm = props => {
    const history=useHistory()


    const [issue, setIssue] = useState ({
        title: '',
        description: '',
        user_id: Number(localStorage.getItem('user_id'))
    })

    const submitIssue = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/issues', issue)
        .then(res => {
            setIssue({
                title: '',
                description: '',
                user_id: Number(localStorage.getItem('user_id'))
            })
            history.go(0)
        })
        .catch(err => {
            console.log(err)
        })
    }
        const issueChange = e => {
            e.persist();
            setIssue({
                ...issue,
                [e.target.name]: e.target.value
            })
        }

        return (
        <form onSubmit={submitIssue}>
            <label>
                <input 
                name='title'
                type="text"
                onChange={issueChange}
                value={issue.title}
                placeholder="Title"
                />
            </label>
            <label>
                <input 
                name='description'
                type="text"
                onChange={issueChange}
                value={issue.description}
                placeholder="Description"
                />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default IssueForm;
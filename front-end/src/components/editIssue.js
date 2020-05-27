import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory, useParams} from 'react-router-dom'


const EditIssue = props => {
    const [updateIssue, setUpdateIssue]= useState({
        title: '',
        description: '',
        user_id: Number(localStorage.getItem('user_id')),
    })
    
    const history=useHistory()
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth()
        .get(`https://co-make-buildweek.herokuapp.com/api/issues/${id}`)
        .then(res => {
            setUpdateIssue({
                title: res.data.title,
                description: res.data.description,
                
            })
        })
    }, [])

    const submitIssue = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/issues', updateIssue, id)
        .then(res => {
            setUpdateIssue({
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
        setUpdateIssue({
            ...updateIssue,
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
                value={updateIssue.title}
                placeholder="Title"
                />
            </label>
            <label>
                <input 
                name='description'
                type="text"
                onChange={issueChange}
                value={updateIssue.description}
                placeholder="Description"
                />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default EditIssue

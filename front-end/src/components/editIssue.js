import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory, useParams} from 'react-router-dom'
import {connect, useDispatch} from "react-redux"
import {getIssueById, submitIssueById} from '../actions/allIssuesAction'


const EditIssue = props => {
    console.log(props)
    const initialState ={
        title: props.title,
    }
    const [updateIssue, setUpdateIssue]= useState({})
    const dispatch = useDispatch()
    const history=useHistory();
    const { id } = useParams();
    const {push} = useHistory();
    

    useEffect(() => {
        dispatch(getIssueById(id))
    }, [dispatch])

    const submitIssue = e => {
        e.preventDefault();
        dispatch(submitIssueById(updateIssue, id))
        push("/main")



        // axiosWithAuth()
        // .put(`/api/issues/${id}`, updateIssue, id)
        // .then(res => {
        //     setUpdateIssue({
        //         title: '',
        //         description: '',
        //         user_id: Number(localStorage.getItem('user_id'))
        //     })
        //     // history.go(0)
        //     push("/main")

        // })
        // .catch(err => {
        //     console.log(err)
        // })
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
                value={props.title}
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

const mapStateToProps = state => {
    return {
        title:state.allIssues.title,
        description: state.allIssues.description
    }
}
export default connect(mapStateToProps, {getIssueById, submitIssueById})(EditIssue);

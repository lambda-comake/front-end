import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory, useParams} from 'react-router-dom'
import {connect, useDispatch} from "react-redux"
import {getIssueById, submitIssueById} from '../actions/allIssuesAction'

import * as yup from 'yup';

const EditIssue = props => {

    //State

    const [updateIssue, setUpdateIssue]= useState({
        title: '',
        description: '',
        user_id: Number(localStorage.getItem('user_id')),
        upVotes: 0
    })

    const [inputErrors, setInputErrors] = useState({ //State for form input validation errors. May use these to display ui later

        username: "",
        password: ""

    });

    const formSchema = yup.object().shape({

        title: yup
            .string()
            .required("Must include a title."),
        description: yup
            .string()
            .required("Must include a description."),
        user_id: yup
            .number()
            .required("Must include user ID."),
        upVotes: yup
            .number()
            .required("Must include upVotes initialized at 0.")
    });

    //Functions

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

    useEffect(() => { // Enables button if the input is valid

        formSchema.isValid(updateIssue).then(valid => { 
  
          document.querySelector('form button').disabled = !valid
  
      })},[updateIssue])

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

import React, { useState, useEffect } from 'react';

import * as yup from 'yup';

import './addissue.css'

let AddIssue = props => {

    //State

    let [formState, setFormState] = useState({

        title: '',
        description: ''
    
    });

    const [inputErrors, setInputErrors] = useState({ //State for form input validation errors

        title: "",
        description: ""

    });

    const formSchema = yup.object().shape({

        title: yup
            .string()
            .min(5, "Title must be at least 5 characters long.")
            .required("Must include a title."),
        description: yup
            .string()
            .min(20, "Description must be at least 20 characters long.")
            .required("Description is Required"),
    });

    //Functions

    let formChange = event => {

        setFormState({
    
            ...formState,
            [event.target.id]: event.target.value
    
        })

        yup
            .reach(formSchema, event.target.id)
            .validate(event.target.value)
            .then(valid => {

                setInputErrors({

                    ...inputErrors,
                    [event.target.id]: ''

                });

            })
            .catch(err => {

                setInputErrors({

                    ...inputErrors,
                    [event.target.id]: err.errors[0]

                });

            })


        event.persist();

    }

    useEffect(_ => {

        //Enabled submit button if input is valid

        formSchema.isValid(formState).then(valid => { 

            document.querySelector('form button').disabled = !valid;
    
        })

    },[formState]);


    let submitForm = event => {

        event.preventDefault();

    }

    return (

        <form className='addissue' onSubmit={event => submitForm(event)}>

            <label htmlFor='title'>Title</label>

            <p>{inputErrors.title}</p>

            <input 
            id='title' 
            placeholder='Type your title here' 
            onChange={event => formChange(event)}
            value={formState.title}/> {/* How to stop pressing 'enter' inside the title input from submitting the form? */}

            <label htmlFor='description'>Issue Description</label>

            <p>{inputErrors.description}</p>

            <textarea 
            id='description' 
            placeholder='Tell us about the issue'
            onChange={event => formChange(event)}
            value={formState.description}></textarea>

            <button disabled>Submit</button>

        </form>


    )

}

export default AddIssue;
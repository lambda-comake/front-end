import React, { useState } from 'react';

import './addissue.css'

let AddIssue = props => {

    //State

    let [formState, setFormState] = useState({

        title: '',
        description: ''
    
    });

    //Functions

    let formChange = event => {

        setFormState({
    
            ...formState,
            [event.target.id]: event.target.value
    
        })

    }

    let submitForm = event => {

        event.preventDefault();

    }

    return (

        <form className='createpost' onSubmit={event => submitForm(event)}>

            <label htmlFor='title'>Title</label>

            <input 
            id='title' 
            placeholder='Type your title here' 
            onChange={event => formChange(event)}
            value={formState.title}/> {/* How to stop pressing 'enter' inside the title input from submitting the form? */}

            <label htmlFor='description'>Issue Description</label>

            <textarea 
            id='description' 
            placeholder='Tell us about the issue'
            onChange={event => formChange(event)}
            value={formState.description}></textarea>

            <button>Submit</button>

        </form>


    )

}

export default AddIssue;
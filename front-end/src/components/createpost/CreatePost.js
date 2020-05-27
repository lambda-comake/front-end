import React from 'react';

import './createpost.css'

let CreatePost = props => {

    return (

        <form className='createpost'>

            <label htmlFor='title'>Title</label>
            <input id='title' placeholder='Type your title here'></input> {/* How to stop pressing 'enter' inside the title input from submitting the form? */}

            <label htmlFor='description'>Issue Description</label>
            <textarea id='description' placeholder='Tell us about the issue'></textarea>

            <button>Submit</button>

        </form>


    )

}

export default CreatePost;
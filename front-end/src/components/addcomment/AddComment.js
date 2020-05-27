import React from 'react';

import './addcomment.css'

let AddComment = props => {

return (

        <form className='addcomment'>

            <input placeholder='Type your message here'></input>

            <button>Add</button>

        </form>

)

}

export default AddComment;
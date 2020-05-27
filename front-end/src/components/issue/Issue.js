import React from 'react';

import Upvote from '../upvote/Upvote';
import Comment from '../comment/Comment';

import './issue.css'

let Issue = props => {

return (

    <div className='issue'>

        <h3>Title</h3>

        <p>Description</p>

        <Upvote />
        <Comment />
        <Comment />
        <Comment />
        <Comment />

    </div>

)

}

export default Issue;
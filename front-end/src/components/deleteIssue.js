import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const DeleteIssue = id =>  {
    
    axiosWithAuth()
    .delete(`/api/issues ${id}`)
    .then (res => {
        
    })
    return (
        <div>
            
        </div>
    )
}
export default DeleteIssue
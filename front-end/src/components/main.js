import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

import Issues from './Issues'
import IssueForm from './IssueForm'


const Main = () => {
    // const { push } = useHistory();

    const [issueBoard, setIssueBoard] = useState([
        {
            title: '',
            description: '',
            user_id: '',

        }
    ]);

    const addNewIssue = (note) => {
        const newIssue ={
            title: note.title,
            description: note.description,
            user_id: note.user_id,
        }
        setIssueBoard([...issueBoard, newIssue]);
    }
    return (
        <div>
            <p></p>
            <Issues />
            
            <IssueForm addNewIssue={addNewIssue} />
        </div>
    )
}
export default Main;
import React, {useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {connect, useDispatch} from "react-redux"
import {useHistory} from 'react-router-dom';
import {getAllIssues} from '../actions/allIssuesAction'

import './issue.css'

const Issues = props => {
    // const [allIssues, setAllIssues] = useState([]);
    const dispatch = useDispatch()
    const {push} = useHistory();
    const history = useHistory()

    useEffect(() => {
        dispatch(getAllIssues())
        // axiosWithAuth()
        //     .get("/api/issues")
        //     .then((res) => {
        //         setAllIssues(res.data)
        //     })
        //     .catch((err) => {
        //         console.log({ err });
        //     });
    }, [dispatch])

    const deleteIssue = id => {
        axiosWithAuth()
        .delete(`api/issues/${id}`)
        .then( res => {
        //  console.log('issue deleted') 
         history.go(0)  
        })
        .catch(err => {
            // console.log('errr')
        })
    }

    const upVote = issue => {
        const newissue = issue
        const votes = parseInt(issue.upVotes) + 1

        axiosWithAuth()
        .put(`/api/issues/${issue.id }`,{...newissue, upVotes: votes} )
        .then(res => {
            history.go(0)
        })
    }

    if (props.issues === undefined) {

        return (

            <h1>Waiting for data...</h1>

        )

    }

  (function(d, s, id) { //Facebook code for implementing a share button
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

    return (
        <div id='issues-container'>
            <h1>Issues</h1>

            <div class="fb-share-button" 
                data-href="https://front-end-ten-omega.now.sh/" 
                data-layout="button_count"
                size="large">
            </div>

            {props.issues.map(issue => {
                return(
                    <div className='issue' key={issue.id}>

                        <b><p>{issue.title}</p></b>
                        <p>{issue.description}</p>
                        <p>{issue.upVotes}</p>
                        
                        <div className='issueControls'>
                            <button onClick={() => upVote(issue)}>Up Vote</button>
                            <button onClick={() => push(`/editIssues/${issue.id}`)}>Edit Issue</button>
                            <button className='delBtn' onClick={() => deleteIssue(issue.id)}>Delete Issue</button>
                        </div>
                
                    </div>
                
                )
            })}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        issues: state.allIssues.issues
    }
}
export default connect(mapStateToProps, {getAllIssues})(Issues);
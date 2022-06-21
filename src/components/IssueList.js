import React, { useState } from 'react'
import Issue from './Issue'
import styles from './IssueList.module.css'

export default function IssueList() {
    //will hold the array of issues from the API
    //issues will be stored in state
    //will pass data for each issue as a prop into a child component
    //fetch data from the API and store it in state when the component is ready

    const [issueArray, setIssueArray] = useState([])


    fetch('https://api.github.com/repos/facebook/create-react-app/issues')
        .then(res => res.json())
        .then(data => {
            setIssueArray(data)
        })


    return (
        <div className={styles.issueList}>

            {issueArray.map((issue) => {
                console.log(issue)
                return <Issue key={issue.id} issue={issue} />
            })}
        </div>
    )
}
import React from 'react'
import styles from './Issue.module.css'

export default function Issue(props) {

    const {title, user, number, created_at} = props.issue
    const formattedDate = new Date(created_at)

    //child component of IssueList 
    //will receive issue data as a single prop called data
    //use data to render the issue data mimicking the format on GitHub

    //Issue component should show at least:
    //Title
    //Issue Number 
    //Date created
    //Username
  return (
    <div className={styles.issue}>
        <h4><a href='#issue'>{title}</a></h4>
        <div className={styles.issueMeta}>
          #{number} opened {formattedDate.toLocaleDateString()} by <a href={user.html_url}>{user.login}</a>
        </div>
        {/* <h3>{issue.id}</h3>
        <h3>{issue.created_at}</h3>
        <h2>{issue.user.login}</h2> */}
    </div>
  )
}
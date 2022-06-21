import React from 'react'

export default function Issue(props) {

    const issue = props.issue

    //child component of IssueList 
    //will receive issue data as a single prop called data
    //use data to render the issue data mimicking the format on GitHub

    //Issue component should show at least:
    //Title
    //Issue Number 
    //Date created
    //Username
  return (
    <div>
        <h1>{issue.title}</h1>
        <h3>{issue.id}</h3>
        <h3>{issue.created_at}</h3>
        <h2>{issue.user.login}</h2>
    </div>
  )
}
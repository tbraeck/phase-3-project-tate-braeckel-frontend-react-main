import React from 'react'
// import NewResource from './NewResource'
// import NewResource from './NewResource'


function Resource({resource}) {

  return (
    <div>
            <h2>Name: </h2>

      <h1>{resource.name}</h1>
      <br/>
      <h2>Description: </h2>

      <h3>{resource.description}</h3>
      <br/>
      <h2>Resource URL: </h2>
      < a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.url}</a>
     
    </div>
  )
}

export default Resource

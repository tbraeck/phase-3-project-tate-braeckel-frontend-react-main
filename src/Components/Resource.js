import React from 'react';
import { useState } from 'react';
import ResourceEdit from './ResourceEdit';

const Resource = ({ resource, handleDeleteClick, handleupdateClick, subjectID }) => {
  const {name, description, url,id} = resource;
  const [showForm, setShowForm] = useState(false)


      return (
    <div className='resourceBox'>
            <h1>Name: </h1>
          <h2>
            {name}
          </h2>
          <br/>
          <hr></hr>
            <h1>Resource #: </h1>
            {id}
            <h1>Description: </h1>

          <h2>{description}</h2>
          <br/>
          <hr></hr>
          <h1>Resource URL: </h1>

          <h2>{url}</h2>
          <br/>
          <hr></hr>
      <button onClick={handleDeleteClick}>Delete</button>
      <button onClick={handleupdateClick}>Edit</button>
      {showForm ?     <ResourceEdit handleUpdate={handleUpdate}  handleAdd={handleAdd}  subjectID={subjectID} resources={resources} setResources={setResources}/>
 : null}

    </div>
  

      // <div className='resourceBox'>
      //       <br/>
      //             <h2>Name: </h2>
      
      //       <h1>{name}</h1>
      //       <br/>
      //             <h2>Resource #: </h2>
      
      //       <h1>{id}</h1>
      //       <br/>
      //       <h2>Description: </h2>
      
      //       <h3>{description}</h3>
      //       <br/>
      //       <h2>Resource URL: </h2>
      //       < a href={url} target="_blank" rel="noopener noreferrer">{url}</a>  
      //       </div>
      //       )
  )}


export default Resource;





// import React from 'react'

// function Resource({subject, setSubject}) {
// const {
//     id,
//     name,
//     description,
//     url

// } = subject 

//   return (
// <div className='resourceBox'>
//       <br/>
//             <h2>Name: </h2>

//       <h1>{name}</h1>
//       <br/>
//             <h2>Resource #: </h2>

//       <h1>{id}</h1>
//       <br/>
//       <h2>Description: </h2>

//       <h3>{description}</h3>
//       <br/>
//       <h2>Resource URL: </h2>
//       < a href={url} target="_blank" rel="noopener noreferrer">{url}</a>  
//       </div>
//       )
// }

// export default Resource
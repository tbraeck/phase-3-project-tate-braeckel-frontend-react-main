import React from 'react';

const Resource = ({ resource, subjectID, onDelete, onEdit }) => {
  
  console.log(resource)
      return (
    <div className='resourceBox'>
        <h1>Name: </h1>
      <h2>{resource.name}</h2>
      <br/>
      <hr></hr>
         <h1>Resource #: </h1>

      <h2>{resource.description}</h2>
      <br/>
      <hr></hr>
      <h1>Resource URL: </h1>

      <h2>{resource.url}</h2>
      <br/>
      <hr></hr>
      <button onClick={() => onDelete(resource.id)}>Delete</button>
      <button onClick={() => onEdit(resource)}>Edit</button>
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
  );
};

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
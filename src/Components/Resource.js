import React from 'react'
import { useState } from 'react';
// import Subject from './Subject';
// import NewResource from './NewResource'
// import NewResource from './NewResource'


function Resource({subject, subjectID, deleteResource, handleUpdate}) {
  const [editedResource, setEditedResource] = useState({});
// const [loading, setLoading] = useState(true)

  // console.log(subjectID)
  const id = subjectID;


  console.log(subject.resources)
// console.log(resource)


  function handleClickDel(){
    // e.preventDefault()
      fetch(`http://localhost:9292/resources/${id}`, {
        method: "DELETE",
      });
       deleteResource(id);
    }

//   function handleClickEdit(e){

// const updatedResource ={
//   name: editedResource.name,
//   description: editedResource.description,
//   url: editedResource.url,
//   id: editedResource.id
// };

//       fetch(`http://localhost:9292/resources/${id}`, {
//         method: "PATCH",

//             headers: {
//             "Content-Type": "application/json"
//             },
//             body: JSON.stringify(updatedResource)
//           })
//             .then((res) => res.json())
//             .then((newResource) =>
//             handleUpdate(newResource)
//             // console.log(data)
//           // setLoading(false)
//             )
//             setLoading(false)
           

//           };

// if(loading){
//   return <h3>Loading...</h3>
// }

console.log(subject)
console.log(subject.resources)

  return (
    <div className='resourceBox'>
      <br/>
            <h2>Name: </h2>

      <h1>{subject.name}</h1>
      <br/>
      <h2>Description: </h2>

      <h3>{subject.description}</h3>
      <br/>
      <h2>Resource URL: </h2>
      < a href={subject.resources.url} target="_blank" rel="noopener noreferrer">{subject.resources.url}</a>
    

{editedResource.id === subject.resource.id ? (
//  <form onSubmit={handleClickEdit}>
<div>
 <div className='inputs'>
 <input
         className='input'

   type="text"
   placeholder="New Name"
   value={editedResource.name}
   onChange={(e) => setEditedResource.name(e.target.value)}
 />
 </div>
  <input

  className='input'

   type="text"
   placeholder="New Description"
   value={editedResource.description}
   onChange={(e) => setEditedResource.description(e.target.value)}
 />
 <input 
 className='input'
   type="text"
   placeholder="New Url"
   value={editedResource.url}
   onChange={(e) => setEditedResource.url(e.target.value)}
 />
 </div>
// </form>
)

:

(<div>{subject.resource.name}</div>)

}

        <div className='delBtn'>
      <button className="btnStyle" type='submit' onClick={ handleClickDel}>DELETE </button>

      </div>
        <div className='editResBtn'>
        {/* <button  className="btnStyle" type='submit' style={{height: "50px",width: "200px", fontSize: "large", marginRight: "330px"}} onClick={() => handleClickEdit(subject.resource.id)}>EDIT </button> */}
        </div>
        {/* <button className="btnStyle" type='submit' onClick={handleClickEdit} style={{height: "50px",width: "200px",fontSize: "large", marginRight: "330px", marginTop: "40px",paddingBottom: "-15px"}}>Submit Edit</button> */}

     



<br/><br/>
<br/>
<hr/>

    </div>
  )
}

export default Resource

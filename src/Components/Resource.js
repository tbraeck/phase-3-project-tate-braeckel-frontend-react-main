import React from 'react'
import { useState } from 'react';
// import NewResource from './NewResource'
// import NewResource from './NewResource'


function Resource({resource, deleteResource, handleUpdate}) {
  const [editResource, setEditResource] = useState('');
  const [editingText, setEditingText] = useState({})
  const { name, description, url } = resource;


  const id = resource.id;

  function handleClickDel(){
    // e.preventDefault()
      fetch(`http://localhost:9292/resources/${id}`, {
        method: "DELETE",
      });

       deleteResource(id);
    }

  function handleClickEdit(e){
// e.preventDefault()
const updatedResource ={
  name: name,
  description: description,
  url: url
};


      fetch(`http://localhost:9292/resources/${id}`, {
        method: "PATCH",

	headers: {
	"Content-Type": "application/json"
	},
	body: JSON.stringify(updatedResource)
})
	.then((res) => res.json())
	.then((editResource) =>
  setEditResource(handleUpdate)

	)

console.log(editResource)
};



  return (
    <div className='resourceBox'>
      <br/>
            <h2>Name: </h2>

      <h1>{name}</h1>
      <br/>
      <h2>Description: </h2>

      <h3>{description}</h3>
      <br/>
      <h2>Resource URL: </h2>
      < a href={url} target="_blank" rel="noopener noreferrer">{resource.url}</a>
      <br/>
      <h2>Resource Number: {id}</h2>
      <br/>

{editResource === resource.id ? (
 <form onSubmit={handleClickEdit}>
 <div className='inputs'>
 <input
         className='input'

   type="text"
   placeholder="New Name"
   value={editResource.name}
   onChange={(e) => setEditingText(e.target.value)}
 />
 </div>
  <input

  className='input'

   type="text"
   placeholder="New Description"
   value={editResource.description}
   onChange={(e) => setEditingText(e.target.value)}
 />
 <input 
 className='input'
   type="text"
   placeholder="New Url"
   value={editResource.url}
   onChange={(e) => setEditingText(e.target.value)}
 />
</form>
)

:

(<div>{resource.name}</div>)

}

        <div className='delBtn'>
      <button className="btnStyle" type='submit' onClick={ handleClickDel}>DELETE </button>

      </div>
        <div className='editResBtn'>
        <button  className="btnStyle" type='submit' style={{height: "50px",width: "200px", fontSize: "large", marginRight: "330px"}} onClick={() => setEditResource(resource.id)}>EDIT </button>
        </div>
        <button className="btnStyle" type='submit' onClick={()=> setEditResource(handleClickEdit)} style={{height: "50px",width: "200px",fontSize: "large", marginRight: "330px", marginTop: "40px",paddingBottom: "-15px"}}>Submit Edit</button>

     



<br/><br/>
<br/>
<hr/>

    </div>
  )
}

export default Resource

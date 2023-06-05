import React from 'react'
import { useState } from 'react';
// import NewResource from './NewResource'
// import NewResource from './NewResource'


function Resource({resource, deleteResource, handleUpdate}) {
  const [editResource, setEditResource] = useState({
    name: '',
    description: '',
    url: ''
  })

  const { name, description, url } = resource;


  const id = resource.id;

  function handleClick(){
    // e.preventDefault()
      fetch(`http://localhost:9292/resources/${id}`, {
        method: "DELETE",
      });

       deleteResource(id);
    }

  function handleClickEdit(e){
// e.preventDefault()

      fetch(`http://localhost:9292/resources/${id}`, {
        method: "PATCH",

	headers: {
	"Content-Type": "application/json"
	},
	body: JSON.stringify(resource)
})
	.then((res) => res.json())
	.then((updatedResource) =>
  handleUpdate(updatedResource)
	
	);
  console.log(editResource)
};
// console.log(resource)

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
      <button type='submit' onClick={ handleClick}>DELETE </button>

      <form onSubmit={handleClickEdit}>
        <input
          type="text"
          placeholder="New Name"
          value={editResource.name}
          onChange={(e) => setEditResource(e.target.value)}
        />
         <input
          type="text"
          placeholder="New Description"
          value={editResource.description}
          onChange={(e) => setEditResource(e.target.value)}
        />
         <input
          type="text"
          placeholder="New Url"
          value={editResource.url}
          onChange={(e) => setEditResource(e.target.value)}
        />
      <button  type='submit' style={{marginRight: "330px"}} onClick={(e) => handleClickEdit(resource)}>EDIT </button>
      </form>



<br/><br/>
<br/>
<hr/>

    </div>
  )
}

export default Resource

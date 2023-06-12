
import React, { useEffect, useState } from 'react';
import Resource from './Resource';
import NewResource from  './NewResource';
import ResourceEdit from './ResourceEdit';

const Subject = () => {
  const [subject, setSubject] = useState([])
  // const [resource, setResource] = useState([]);
  const [editingResource, setEditingResource] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:9292/subjects`)
    .then((r) => r.json())
    .then((data) => setSubject(data))
        }, [])
console.log(subject)

useEffect(()=>{
  fetch(`http://localhost:9292/resources`)
  .then(res => res.json())
  .then(data => setEditingResource(data))
}, []);




  const handleCreate = (newResource) => {
    setEditingResource(editingResource => [...editingResource, newResource]);
  };

  // function handleAddPlant(newPlant) {
  //   const updatedPlantsArray = [...plants, newPlant];
  //   setPlants(updatedPlantsArray);
  // }
  function handleDelete(id) {

            fetch(`http://localhost:9292/resources/${id}`, {
              method: "DELETE",
            });
            setSubject((prevResources) => prevResources.filter((res) => res.id !== id)
            )
  };

  const handleEdit = (subject) => {
    setSubject(subject);
  };

  const handleUpdate = (updatedRes) => {
    setEditingResource((prevResources) =>
      prevResources.map((resource) => (subject.id === updatedRes.user.id ? updatedRes : resource))
    );
    setEditingResource(null);
  };

console.log(subject)

// const updatedResource = subject.resources.map(resource => {
//   if(subject.id === updatedResource.id) {
//     return updatedResource
//   }
//   return resource
// })

const resourcesMap =  subject.map((sub) => (
  sub.resources.map((resource)=> (
<div key={resource.id}>
  <h1>{subject.name}</h1>
  <Resource
    resource={resource}
    subjectID={subject.id}
    onDelete={handleDelete}
    onEdit={handleEdit}
  />
  </div>
))))

console.log(subject)

  return (
    <div>
      <NewResource onCreated={handleCreate} />
      <div>
        <h1>
          {subject.name}
        </h1>
      </div>
      <div>
        {resourcesMap}
      </div>
     
      {editingResource && (
        <ResourceEdit resource={editingResource} onUpdated={handleUpdate} />
      )}
    </div>
  );
};

export default Subject;










// import React from 'react'
// import { useState, useEffect } from 'react'
// import ResourceEdit from './ResourceEdit'
// // import Resource1 from './Resource1'
// import NewResource from './NewResource'
// // import { Link } from 'react-router-dom'

// function Subject( ) {
//   const [subject, setSubject] = useState([])

//   useEffect(() => {
//     fetch(`http://localhost:9292/subjects`)
//     .then((r) => r.json())
//     .then((data) => setSubject(data))
//         }, [])



// function handleAdd(aResource){
//   const updatedResourceArray =
//   [...subject.resources, aResource]
//   setSubject(updatedResourceArray)
// }


// function handleDeleteResource(id) {
//   if(window.confirm("Do you want to delete this resource?")){
//     const updatedResourceArray = subject.resources.filter((resource)=> resource.id !== id);
//     setSubject(...subject.resources, updatedResourceArray)
//     window.location.reload()
//     // console.log(updatedResourceArray)
//   }

// }

// function handleUpdate(updatedResource) {

//   const updatedSubjects = subject.map((resource) => {
//     if (resource.id === updatedResource.id) {
//       return updatedResource;
//     } else {
//       return resource;
//     }
//   });
//   setSubject(updatedSubjects);
// console.log(updatedSubjects)
// }


// // const updatedSubjects = subject.resources.map(resource => {
// //   if(subject.resource.id === updatedSubject.id) {
// //     return updatedSubject
// //   }
// //   return subject
// // })
// console.log(subject)

//   // console.log(subject.resources)


//   const resourceMap = subject.map(resource => (
//     <ResourceEdit key={resource.id} 
// subject={subject}
// resource={subject.resources}
// setSubject={setSubject}
// deleteResource={handleDeleteResource}
// handleUpdate={handleUpdate}
// value={subject}
// subjectID={subject.id}/>)
//   )


// return(
//   <div className='subjectBoxOverall' key={subject.id}>
//      <NewResource subjectID={subject.id} handleAdd={handleAdd} />

//       <br/>
//       <div className="subjectBox">
//     <h1 className='subjectInfoB' style={{ color: 'rgb(245, 173, 173)', lineHeight : 0, padding: 20, fontSize: "50px", marginTop: "20px" }}>Subject: </h1>
//     <h1 className='subjectInfo' style={{ color: 'black', lineHeight : 0, padding: '20px',paddinTop: '20px', fontSize: "40px", marginLeft: "40px", backgroundColor: 'rgb(239, 200, 100)', margin: '10px' }}>{subject.name}</h1>
//     <br/>

//     <h1 className='subjectInfoB'>Description: </h1>

//     <h1 className='subjectInfo'>{subject.description}</h1>
//     <br/>
//     <hr></hr>
//     <br/>
//     </div>
//     <div className='subjectInfoRes'>
//     <h1>RESOURCES</h1>
//     <hr></hr>
//     <br/>

//     </div>


//     <div className='resourceList'>
//     {resourceMap}
//     </div>
//    <br/>
//     </div>

//     )
// }

// export default Subject

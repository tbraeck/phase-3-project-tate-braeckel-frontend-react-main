
import React from 'react';
import Resource from './Resource';
import { useParams } from 'react-router-dom';
import NewResource from './NewResource';
// import ResourceEdit from './ResourceEdit';


const Subject = ({subjects, handleDelete,  handleAdd, handleUpdate}) => {

const {id} = useParams()

const subject = subjects.find(sub => sub.id === parseInt(id, 10)) 
console.log("subject",subject)
console.log("resources",subject.resources)

const handleDeleteClick = ()=> {
  fetch(`http://localhost:9292/resources/${subject.id}`, {
              method: "DELETE",
            });
            handleDelete(subject.id)            
}

const allResources = subject.resources.map((resource) => (
  <div key={resource.id}>
    <Resource  resource={resource} handleDeleteClick={handleDeleteClick} handleUpdate={handleUpdate} subjectID={subject.id}/>
</div>
))

return (
  <div className='newResourceBox'>
    <div className='subjectAll'>
            
      <div className='subTitle'>
          <h1>Subject: </h1>
          <h2><em>{subject.name}</em></h2>
      </div>
            <ul>{allResources}</ul>
              {/* <ResourceEdit handleUpdate={handleUpdate}  handleAdd={handleAdd}  subjectID={subject.id} /> */}
          <div className='newResForm'>
              <NewResource  subjectID={subject.id} subject={subject}   handleAdd={handleAdd} />
          </div>
      </div>
  </div>

)


}


export default Subject;

  // const handleCreate = (newResource) => {
  //   setEditingResource([...editingResource, newResource]);
  // };

  // function handleDelete(id) {

  //           fetch(`http://localhost:9292/resources/${id}`, {
  //             method: "DELETE",
  //           });
  //           setEditingResource((prevResources) => prevResources.filter((res) => res.id !== id)
  //           )
  // };

  // const handleEdit = (subject) => {
  //   setSubject(subject);
  // };

  // const handleUpdate = (updatedRes) => {
  //   setEditingResource((prevResources) =>
  //     prevResources.map((resource) => (subjects.id === updatedRes.subjects.id ? updatedRes : resource))
  //   );
  //   setEditingResource(null);
  // };

// console.log(subjects.resources)

// const updatedResource = subjects.resources.map(resource => {
//   if(resource.id === updatedResource.id) {
//     return updatedResource
//   }}
// )




// const resourceCard =  subjects.map((resource) => {
// const resList = resource.map(
// <Resource key={resource.id} 
// // subject={subjects}
// resource={resource}
// // setSubject={setSubject}
// onDelete={handleDelete}
// onEdit={handleUpdate}
// value={subjects}
// subjectID={subjects.id}/>)
  
// })
// console.log(resources)

/* <div key={sub.id}>
  <h1>{sub.resources.name}</h1>
  <Resource
    resource={sub.resources}
    subjectID={sub.id}
    onDelete={handleDelete}
    onEdit={handleUpdate}
  />
  </div>
)) */



// console.log(subject)



  










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

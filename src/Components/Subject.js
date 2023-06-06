import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Resource from './Resource'
import NewResource from './NewResource'
// import { Link } from 'react-router-dom'

function Subject( ) {
  const [subject, setSubject] = useState({
    resources: []
  })
  const [resources, setResources] = useState({
    name: '',
description: '',
url: '',
subject_id: ''
  })

  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/subjects/${id}`)
    .then((r) => r.json())
    .then((data) => setSubject(data))
        }, [id])


useEffect(()=> {
  fetch(`http://localhost:9292/resources`)
  .then((r) => r.json())
  .then((data) => setResources(data))
      }, [])
      // console.log(resources)


function handleAdd(aResource){
  const updatedResourceArray =
  [...resources, aResource]
  setResources(updatedResourceArray)
  console.log(updatedResourceArray)

}


function handleDeleteResource(id) {
  if(window.confirm("Do you want to delete this resource?")){
    const updatedResourceArray = resources.filter((resource)=> resource.id !== id);
    setResources(...resources, updatedResourceArray)
    window.location.reload()
    console.log(updatedResourceArray)
  }
 
}

function handleUpdate(updatedResource) {
  const updatedResourceArray = subject.resources.map((resource) => {
    if (resource.id === updatedResource.id) {
      return updatedResource;
    } else {
      return resource;
    }
  });
  setResources(updatedResourceArray);
}

  // console.log(resources)

const resourcesMap = subject.resources.map(res => 
<Resource key={res.id} resource={res} 
deleteResource={handleDeleteResource}  
handleUpdate={handleUpdate} 
value={resources}/> 
)


return(
  <div className='subjectBoxOverall' key={subject.id}>
     <NewResource subjectID={subject.id} handleAdd={handleAdd} />

      <br/>
      <div className="subjectBox">
    <h1 className='subjectInfoB' style={{ color: 'rgb(245, 173, 173)', lineHeight : 0, padding: 20, fontSize: "50px", marginTop: "20px" }}>Subject: </h1>
    <h1 className='subjectInfo' style={{ color: 'black', lineHeight : 0, padding: '20px',paddinTop: '20px', fontSize: "40px", marginLeft: "40px", backgroundColor: 'rgb(239, 200, 100)', margin: '10px' }}>{subject.name}</h1>
    <br/>

    <h1 className='subjectInfoB'>Description: </h1>

    <h1 className='subjectInfo'>{subject.description}</h1>
    <br/>
    <hr></hr>
    <br/>
    </div>
    <div className='subjectInfoRes'>
    <h1>RESOURCES</h1>
    <hr></hr>
    <br/>

    </div>


    <div className='resourceList'>
    {resourcesMap}
    </div>
   <br/>
    </div>

    )
}

export default Subject

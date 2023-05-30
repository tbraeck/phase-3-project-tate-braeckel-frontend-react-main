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

  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/subjects/${id}`)
    .then((r) => r.json())
    .then((data) => setSubject(data))
        }, [id])


function handleAdd(newResource){
  const updatedResourceArray =
  [...resources, newResource]
  console.log(updatedResourceArray)
  setSubject(updatedResourceArray)

}

function handleUpdate(updatedResource) {
  const updatedResourceArray = subject.resources.map((resource) => {
    if (resource.id === updatedResource.id) {
      return updatedResource;
    } else {
      return resource;
    }
  });
  setSubject(updatedResourceArray);
}


  console.log(subject.resources)

const resources = subject.resources.map(res => <Resource key={res.id} resource={res}/> )


return(
  <div className='subjectList' key={subject.id}>
     <NewResource handleAdd={handleAdd} />
      <br/>
      <div className="subjectBox">
    <h1 className='subjectInfoB' style={{ color: 'rgb(245, 173, 173)', lineHeight : 0, padding: 20, fontSize: "50px" }}>Subject: </h1>
    <h1 className='subjectInfo' style={{ color: 'black', lineHeight : 0, padding: 20, fontSize: "40px", marginLeft: "40px", backgroundColor: 'rgb(239, 200, 100)', paddin: '10px', margin: '10px' }}>{subject.name}</h1>
    <br/>
   
    <h1 className='subjectInfoB'>Description: </h1>

    <h1 className='subjectInfo'>{subject.description}</h1>
    <br/>
    <hr></hr>
    <br/>
    <h1 className='subjectInfo' handleUpdate={handleUpdate}>Resources: </h1>
    <hr></hr>
    <br/>

   {resources}
 
   </div>
   <button type='delete' className='subjectInfoB'>Delete Resource</button>

   <div>
<h1>
  {/* {addResource} */}
</h1>
   </div>


    </div>

    )
}

export default Subject

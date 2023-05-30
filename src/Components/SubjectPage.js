import React from 'react'
import { useState, useEffect} from 'react'

import { Link } from 'react-router-dom'
// import NewResource from './NewResource'

function SubjectPage() {
    const [subjects, setSubjects] = useState([])
    // const [newResource, setNewResource] = useState([]);




    useEffect(() => {
fetch(`http://localhost:9292/subjects`)
.then((r) => r.json())
.then((data) => setSubjects(data))

    }, [])
    // console.log(subjects)

    // function handleDelete(id){
    //   const updatedResourcesArray = subjects.resources.filter((subject) => subject.id !== id)
    // setSubjects(updatedResourcesArray);
    // }


    // function handleUpdatedResources(updatedResource) {
    //   const updatedResourceArray = subjects.resources.map((oneResource) => {
    //       if (oneResource.id === updatedResource.id) {
    //           return <h1>{updatedResource}</h1>;
    //       } else {
    //           return subjects.resources;
    //       }
    //   });
    //   setSubjects(updatedResourceArray)
    // }

return (
  <div>

  <div className='subjectList'>
   <h2>
  {subjects.name}


 </h2>
 {subjects.map((subject) => (

  <div className='subjectMap  '>

  <h2 key={subject.id} >
<Link to={`/subjects/${subject.id}`}  >

  {subject.name}
</Link>
  </h2>

  </div>

 ))}
  </div>



    </div>
  )
}

export default SubjectPage



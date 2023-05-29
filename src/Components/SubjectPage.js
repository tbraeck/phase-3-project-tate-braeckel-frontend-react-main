import React from 'react'
import { useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

function SubjectPage() {
    const [subjects, setSubjects] = useState([])



    useEffect(() => {
fetch(`http://localhost:9292/subjects`)
.then((r) => r.json())
.then((data) => setSubjects(data))

    }, [])
    // console.log(subjects)



return (
  <div>
  <div className='subjectList'>
   <h2>
  {subjects.name}


 </h2>
 {subjects.map((subject) => (

  <div className='subjectMap  '>

  <h2 key={subject.id} >
<Link to={`/subjects/${subject.id}`} >
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



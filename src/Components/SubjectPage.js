import React from 'react'
import Search from './Search'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function SubjectPage() {
    const [subjects, setSubjects] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
fetch(`http://localhost:9292/subjects`)
.then((r) => r.json())
.then((data) => setSubjects(data))

    }, [])
    console.log(subjects)


    const displayedSubjects = subjects.filter((subject) => {
      return subject.name.toLowerCase().includes(searchTerm.toLowerCase());
    });


return (
  <div>

  <div className='subjectList'>
   <h2>
  {subjects.name}

 </h2>
 <div className='subjectsTitle'>
 <h1 >SUBJECTS</h1>

 </div>
 <div className='subjectMap  ' >

 {displayedSubjects.map((subject) => (

  <div key={subject.id}>
  <h2  >
<Link to={`/subjects/${subject.id}`}  >
  {subject.name}
</Link>
  </h2>
  </div>

 ))}
 </div>
  </div>

<div className='searchBar'>
  <Search className='searchBarReal' searchTerm={searchTerm} onSearchChange={setSearchTerm} />
  </div>
    </div>
  )
}

export default SubjectPage



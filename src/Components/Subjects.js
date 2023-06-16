import React from 'react'
import Search from './Search'
import { useState} from 'react'
import { Link } from 'react-router-dom'



function Subjects({subjects}) {
    const [searchTerm, setSearchTerm] = useState("");

// console.log("subjects", subjects.length)

    const displayedSubjects = subjects.filter((subject) => {
      return subject.name.toLowerCase().includes(searchTerm.toLowerCase());
    });



   

return (
  <div>
  <div className='subjectList'>
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

export default Subjects



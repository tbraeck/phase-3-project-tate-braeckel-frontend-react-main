import React from 'react'
import NewSubject from './NewSubject';
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom';

function Subjects({subjects,handleAdd}) {

  const links = subjects.map((subject) => (
    <div key={subject.id}>
    <h2 >
      <Link to={`/subjects/${subject.id}`}  >
        {subject.name}
      </Link>
    </h2>
    </div>
  ))

return (
  <div>
    <div className='subjectList'>
      <div className='subjectsTitle'>
        <h1 >SUBJECTS</h1>
      </div>
          <div className='subjectMap  ' >
            {links}       
          </div>
        </div>
      <div>
        <NewSubject subjects={subjects} handleAdd={handleAdd}/>
      </div>
      <div>
        {/* <SubjectEdit subjects={subjects}/> */}
      </div>
  </div>
  )
}

export default Subjects



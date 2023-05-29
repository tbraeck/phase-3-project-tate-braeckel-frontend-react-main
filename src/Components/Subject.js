import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Resource from './Resource'
// import { Link } from 'react-router-dom'

function Subject( ) {
  const [subject, setSubject] = useState({
    resources: []
  })


// const [subjectForm, setSubjectForm] = useState(false)

const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/subjects/${id}`)
    .then((r) => r.json())
    .then((data) => setSubject(data))
        }, [id])


  console.log(subject.resources)
const resources = subject.resources.map(res => <Resource key={res.id} resource={res}/>)

  return(
  <div className='subjectList'>

      <br/>
      <div className="subjectBox">
    <h1 className='subjectInfo'>Subject: </h1>
    <h1 className='subjectInfo'>{subject.name}</h1>
    <br/>
    <h1 className='subjectInfo'>Description: </h1>
    <h1 className='subjectInfo'>{subject.description}</h1>
    <br/>
    <h1 className='subjectInfo'>Resources: </h1>

   {resources}
   </div>
    </div>
    )
}

export default Subject

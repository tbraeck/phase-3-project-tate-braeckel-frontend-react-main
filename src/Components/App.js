import React, { useEffect, useState } from 'react'

import Home from './Home'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import '../index.css'
import Subject from './Subject'
import Subjects from './Subjects'

function App() {
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch(`http://localhost:9292/subjects`)
          .then((r) => r.json())
          .then((data) => {
            setSubjects(data)
            setLoading(false)

          })
     }, [])

      if(loading)
      return <h1>Loading...</h1>
// console.log("resources", subjects.resources)
// console.log(resources)

const handleAdd = (newSubject) => {
      const newResourceArray = [...subject, newSubject]
      setSubjects(subjectArray)
    }
      // console.log(subjects, "subjects")

      

console.log(subjects)



const handleUpdate =(upRes) => {
const updatedRes = subjects.resources.map(res => {
      if (res.id === upRes.id) {
        return updatedRes
      } else {
        return res;
      }
})
setSubjects(updatedRes)
}


  return (
    <div className="App">

      <Header />
      <NavBar />
      
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects subjects={subjects} setSubjects={setSubjects} handleAdd={handleAdd}  /> } />
          <Route path="/subjects/:id" element={<Subject subjects={subjects}  setSubjects={setSubjects} handleAdd={handleAdd} handleAddResource={handleAddResource}   handleUpdate={handleUpdate}/>} />
          <Route path="/subjects/:id/edit" element={<Subject subjects={subjects}  setSubjects={setSubjects}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App

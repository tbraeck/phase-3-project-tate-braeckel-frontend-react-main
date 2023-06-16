import React, { useEffect, useState } from 'react'

import Home from './Home'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import '../index.css'
import Subject from './Subject'
import Subjects from './Subjects'


// import Art from './Art'


function App() {
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)

//have links reroute to specific page 


  useEffect(() => {
    fetch(`http://localhost:9292/subjects`)
    .then((r) => r.json())
    .then((data) => setSubjects(data))
    setLoading(false)
        }, [])

        if(loading)
        return <h1>Loading...</h1>

       

  return (
    <div className="App">

      <Header />
      <NavBar />
      
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects subjects={subjects} setSubjects={setSubjects}/> } />
          <Route path="/subjects/:id" element={<Subject subjects={subjects} setSubjects={setSubjects}/>} />
          <Route path="/subjects/:id/edit" element={<Subject subjects={subjects}  setSubjects={setSubjects}/>} />


        </Routes>
      </div>
    </div>
  )
}

export default App

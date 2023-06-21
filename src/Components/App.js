import React, { useEffect, useState } from 'react'

import Home from './Home'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import '../index.css'
import Subject from './Subject'
import Subjects from './Subjects'
// import { useParams } from 'react-router-dom'

function App() {
  const [subjects, setSubjects] = useState([])
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)

//have links reroute to specific page 
// const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/subjects`)
          .then((r) => r.json())
          .then((data) => setSubjects(data))
          setLoading(false)
      
          fetch(`http://localhost:9292/resources`)
          .then((r) => r.json())
          .then((data) => setResources(data))
          // setLoading(false)
              }, [])

              if(loading)
              return <h1>Loading...</h1>
      console.log(resources, "resources")

      function handleAdd(newResource){
        const resourceArray = [...resources, newResource]
        setResources(resourceArray)
      }

      console.log(resources, "resources")
      // console.log(subjects.resources, "subjects")
       
const handleDelete = (id) => {
  const updatedResourceList = resources.filter((resource) => {
    return resource.id !== id
  });
  setSubjects(  setResources(updatedResourceList)
  )
}


function handleUpdate(upRes) {
const updatedRes = resources.map(res => {
  if (res.id === upRes.id) {
    return updatedRes
  } else {
    return res;
  }
})
setResources(updatedRes)
}

  return (
    <div className="App">

      <Header />
      <NavBar />
      
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects subjects={subjects} setSubjects={setSubjects} handleAdd={handleAdd}/> } />
          <Route path="/subjects/:id" element={<Subject subjects={subjects}  setSubjects={setSubjects} handleAdd={handleAdd} handleUpdate={handleUpdate}   handleDelete={handleDelete} resources={resources} setResources={setResources} />} />
          <Route path="/subjects/:id/edit" element={<Subject subjects={subjects}  setSubjects={setSubjects}/>} />


        </Routes>
      </div>
    </div>
  )
}

export default App

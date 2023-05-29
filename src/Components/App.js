import React from 'react'
import Home from './Home'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import '../index.css'
import Subject from './Subject'
// import DropdownComp from './DropdownComp'
import SubjectPage from './SubjectPage'


// import Art from './Art'


function App() {

  return (
    <div className="App">
      
      <Header />
      <NavBar />
      {/* <Home/> */}
      {/* <DropdownComp/> */}
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/subjects" element={<SubjectPage />} />
          <Route path="/subjects/:id" element={<Subject />} />
       
        </Routes>
      </div>
    </div>
  )
}

export default App

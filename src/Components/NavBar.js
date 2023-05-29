import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="linkButtons">
      <div>
        <NavLink
          to="/"

        >
          <button className="btnStyle" type="button">
            Home
          </button>
        </NavLink>
        <NavLink
          to="/subjects"
        >
          <button type="button" className="btnStyle">
            Subjects          </button>
        </NavLink>
      
        
      </div>
    
    </div>
  )
}

export default NavBar

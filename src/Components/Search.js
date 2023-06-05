import React from 'react'

function Search({searchTerm, onSearchChange}) {
  return (
    <div className="searchbar">
      <label htmlFor="search"><em><b>SEARCH SUBJECTS </b></em></label>
      <br/>
      <input
        type="text"
        id="search"
        placeholder="Subject name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default Search


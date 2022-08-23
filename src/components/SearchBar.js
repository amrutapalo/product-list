import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder='Search by name, category...' className='search' id='search'/>
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  )
}

export default SearchBar;
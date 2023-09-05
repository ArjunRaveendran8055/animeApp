import React from 'react'

const Search = (props) => {


    const inputChangeHandler=(e)=>{
        props.setInput(e.target.value)
      }
    

  return (
    <div className="search-container">
    <input
      type="search"
      className="searchbar"
      placeholder="Search Pokemon...."
      onChange={inputChangeHandler}
    />
  </div>
  )
}

export default Search

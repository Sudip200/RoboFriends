import React from 'react'

const SearchBox =({searchChange})=>{

  

  return(
    <div className='search-box-container'>
   <input className='input-box' type='search'
   placeholder='Search for robofrinds'
   onChange={searchChange}/>
    </div>
  )




}
export default SearchBox;
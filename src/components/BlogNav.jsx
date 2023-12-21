import React, { useState } from 'react'

function BlogNav() {

  const [activeNavItem,setActiveNavItem]=useState()
   
  const handleClick=(index)=>{
     setActiveNavItem(index)
  }

  return (
    <div className='text-white flex justify-between px-5 py-3'>
      <div className='pl-3'>
        <p>THE BLOGS</p>
        </div> 
       <div className='flex gap-5 pr-8 cursor-pointer'>
        <p className={`nav-item ${activeNavItem === 0 ? 'underline' : ''}`} 
          onClick={() => handleClick(0)}>Blog</p>
        <p className={`nav-item ${activeNavItem === 1 ? 'underline' : ''}`}
          onClick={() => handleClick(1)}>Project</p>
        <p className={`nav-item ${activeNavItem === 2 ? 'underline' : ''}`}
          onClick={() => handleClick(2)}>About</p>
        <p className={`nav-item ${activeNavItem === 3 ? 'underline' : ''}`}
          onClick={() => handleClick(3)}>NewsLetter</p>
        </div> 
    </div>
  )
}

export default BlogNav
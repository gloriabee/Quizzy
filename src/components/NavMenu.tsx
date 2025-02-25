import React from 'react'
import AddCategory from './AddCategory'
import AddModal from './AddModal'

const NavMenu = (props) => {
  return (
    <div className='container grid grid-cols-6 gap-2 mx-auto'>
      
      <AddCategory/>
      <AddModal addFlashcard={props.addFlashcard}/>
    </div>
  )
}

export default NavMenu

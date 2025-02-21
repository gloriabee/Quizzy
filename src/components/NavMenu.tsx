import React from 'react'
import AddCategory from './AddCategory'
import AddModal from './AddModal'

const NavMenu = () => {
  return (
    <div className='container grid grid-cols-6 gap-2 mx-auto'>
      
      <AddCategory/>
      <AddModal/>
    </div>
  )
}

export default NavMenu

import React from 'react'
import Employee from './components/Employee'

const App = () => {
  const isEmp=true;
  
  return (
    <div>
      {
        isEmp? <>
        <Employee></Employee>
        <Employee></Employee>
        </>: <p>No employee found</p>
      }
      
    </div>
  )
}

export default App

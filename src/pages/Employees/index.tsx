import React from 'react'
import { useState } from "react";
import Employee from '@/components/Employee';
const Employees = () => {
  const [employees,setEmployees]=useState(
    [
      {
        id:1,
        name:'gloria',
        role:'project manager',
        image:'https://tailwindcss.com/_next/static/media/erin-lindford.90b9d461.jpg'
      },
      {
        id:2,
        name:'win',
        role:'developer',
        image:'https://tailwindcss.com/_next/static/media/erin-lindford.90b9d461.jpg'
      },
      {
        id:3,
        name:'nyunt',
        role:'ui/ux designer',
        image:'https://tailwindcss.com/_next/static/media/erin-lindford.90b9d461.jpg'
      }
    ]
  )

  function updateEmployee(id,name,role){
   const updatedEmployees=employees.map((emp)=>{
      if(id==emp.id){
        return {...emp}
      }
      return emp;
    })
    setEmployees(updatedEmployees)
  }
  return (
    <div className="container 
      mt-4
       grid 
       grid-cols-1
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 gap-4">
         {
        employees.map((e)=> {return (
            <Employee key={e.id} name={e.name} role={e.role} img={e.image} updateEmployee={updateEmployee}/>
        )
      }
        )
      }
    </div>
  )
}

export default Employees

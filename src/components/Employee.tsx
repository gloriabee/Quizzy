import React from 'react'

import EditEmployee from './EditEmployee';
const Employee = (props) => {
  return (
    <div className="bg-white border border-black rounded-2xl flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} alt="" />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">{props.name}</p>
      <p className="font-medium text-gray-500">{props.role}</p>
    </div>
    <EditEmployee/>
  </div>
</div>
  )
}

export default Employee

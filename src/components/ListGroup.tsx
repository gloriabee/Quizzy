import React from 'react'

const ListGroup = () => {
  const items=[
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ]
   

  return (
    <>
      <h1>Top Scores</h1>
      <ul className="list-group" >
        {items.map((item)=>(
            <li className='list-group-item' key={item}>{item}</li>
        ))}
     </ul>
       
  
   
    </>
  )
}

export default ListGroup

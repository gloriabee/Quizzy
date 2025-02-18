import React from 'react'

const ListGroup = () => {
  const items=[
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ]
 
  
  const getMessage= ()=>{
    return items.length===0 && <p>No item found </p> 
  }
//    const items=[]
//   if(items.length===0)
//     return (
//     <>
//         <h1>Top Scores</h1>
//         <p>No item found</p>
//     </>
    
//     )

   

  return (
    <>
      <h1>Top Scores</h1>
       {getMessage()}
      <ul className="list-group" >
        {items.map((item)=>(
            <li className='list-group-item' key={item}>{item}</li>
        ))}
     </ul>
       
  
   
    </>
  )
}

export default ListGroup

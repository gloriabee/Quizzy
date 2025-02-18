import React, { useState } from 'react'
 
interface Props{
    items: string[];
    heading: string;
}

const ListGroup = ({items,heading}: Props) => {
  //Hook
  const [selectedIndex,setSelectedIndex]= useState(-1)
  

  
  const getMessage= ()=>{
    return items.length===0 && <p>No item found </p> 
  }

  const handleClick=(i)=>{
     setSelectedIndex(i)
  }
   
  return (
    <>
      <h1>{heading}</h1>
{getMessage()}
<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Name</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
        {
            items.map((item,index)=>(
                <tr className={selectedIndex===index? 'table-active':''}
                 onClick={()=>handleClick(index)}
                 key={item.rank}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
                </tr>
            ))
        }


  </tbody>
</table>
    
   
    </>
  )
}

export default ListGroup

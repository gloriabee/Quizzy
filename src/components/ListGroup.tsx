import React from 'react'

const ListGroup = () => {
  const items=[
    { "rank": 1, "name": "Alice", "score": 2500 },
    { "rank": 2, "name": "Bob", "score": 2300 },
    { "rank": 3, "name": "Charlie", "score": 2100 },
    { "rank": 4, "name": "Diana", "score": 1900 },
    { "rank": 5, "name": "Eve", "score": 1700 },
  ]
 
  
  const getMessage= ()=>{
    return items.length===0 && <p>No item found </p> 
  }

  const handleClick=(e:MouseEvent)=>{
     console.log(e);
     
  }
   
  return (
    <>
      <h1>Top Scores</h1>
{getMessage()}
<table className="table">
  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Name</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
        {
            items.map((item)=>(
                <tr className=''
                 onClick={handleClick}
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

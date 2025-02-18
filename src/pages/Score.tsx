import ListGroup from '@/components/ListGroup'
import React from 'react'

const Score = () => {
  const items=[
      { "rank": 1, "name": "Alice", "score": 2500 },
      { "rank": 2, "name": "Bob", "score": 2300 },
      { "rank": 3, "name": "Charlie", "score": 2100 },
      { "rank": 4, "name": "Diana", "score": 1900 },
      { "rank": 5, "name": "Eve", "score": 1700 },
    ]
   
  return (
    <div>
      
      {/* <div className="flex justify-center items-center">
      <div className='w-[400px] bg-purple-100
       p-4 flex justify-between rounded-2xl'>
        <p className='bg-purple-500'>1</p>
        <p>Gloria</p>
        <p>300</p>
      </div>
      </div> */}

      <ListGroup items={items} heading='Top Scores'/>
     
    </div>
  )
}

export default Score

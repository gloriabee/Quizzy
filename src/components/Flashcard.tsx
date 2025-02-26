import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import EditModal from './EditModal'
import Button from 'react-bootstrap/esm/Button'

import { cn } from '@/lib/utils';

const Flashcard = (props) => {
  const [isFlipped,setIsFlipped]= useState(false);
  return (
    <div className={cn("flashcard",isFlipped && "flipped")} 
    onClick={()=> setIsFlipped(!isFlipped)}>
      {/* Front */}
      <Card className='flashcard-face absolute'>
        <CardTitle className='flex justify-end p-2 gap-1'>
          {props.editModal}
          <div className="space-x-5"></div>
          <Button variant='danger'>Delete</Button>
        </CardTitle>
        <CardContent className='flex flex-col items-center justify-center h-full p-6'>
          <h3 className='text-2xl font-semibold text-center'>{props.title}</h3>
          <p className='text-sm text-muted-foreground mt-2'>Click to flip</p>
        </CardContent>
      </Card>

      {/* Back */}
      <Card className='flashcard-face flashcard-back'>
        <CardTitle className='flex justify-end p-2 gap-1'>
          {props.editModal}
          <div className="space-x-5"></div>
          <Button variant='danger'>Delete</Button>
        </CardTitle>
        <CardContent className='flex flex-col items-center justify-center h-full p-6'>
          <p className='text-lg font-medium text-center'>{props.definition}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Flashcard

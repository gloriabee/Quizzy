import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import EditModal from './EditModal'
import Button from 'react-bootstrap/esm/Button'
import { MdDelete } from "react-icons/md";

const Flashcard = (props) => {
  return (
    <div>
      <Card>
        <CardTitle className='flex justify-end p-2 gap-1'>
          <EditModal title={props.title} id={props.id} updateFlashcard={props.updateFlashcard}/>
          <div className="space-x-5"></div>
          <Button variant='danger'><MdDelete /></Button>
        </CardTitle>
        <CardContent className='flex flex-col items-center justify-center h-full p-6'>
          <h3 className='text-2xl font-semibold text-center'>{props.title}</h3>
          <p className='text-sm text-muted-foreground mt-2'>Click to flip</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Flashcard

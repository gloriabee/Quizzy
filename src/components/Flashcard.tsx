import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Card, CardContent } from './ui/card'

const Flashcard = ({title,description}) => {
    const [isFlipped,setIsFilpped]= useState(false)

  return (
    <div className="container flex justify-center items-center my-auto">
  
           <motion.div 
           onClick={()=>setIsFilpped(!isFlipped)}
           style={{
               perspective: '200px',
               position:'relative',
               cursor:'pointer'}}
           animate={{rotateX: isFlipped? 0:360}}
           transition={{duration:1}}>
       
           
           <Card style={{backfaceVisibility:'hidden'}} className='p-4'>
             <CardContent>
             {isFlipped?description:<h3>{title}</h3>}
             </CardContent>
           </Card>
       
           </motion.div>
    </div>
 
  )
}

export default Flashcard

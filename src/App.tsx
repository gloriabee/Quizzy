import React from 'react'
import Flashcard from './components/Flashcard'

const App = () => {
  return (
    <div className="container mt-4 
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4
     gap-4">
  <Flashcard title="Biology" description="Biology is the study of living things" />
  
</div>
  )
}

export default App

import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import NavMenu from './components/NavMenu';
// import { v4 as uuidv4 } from 'uuid';
import EditModal from './components/EditModal';
import Nav from './components/Navigation/Nav';


const App = () => {
  const [datas,setDatas] = useState(  [
    {
        "id": 1,
        "title": "Artificial Intelligence",
        "definition": "The simulation of human intelligence processes by machines, especially computer systems."
    },
    {
        "id": 2,
        "title": "Machine Learning",
        "definition": "A subset of AI that involves the use of algorithms and statistical models to perform tasks without explicit instructions."
    },
    {
        "id": 3,
        "title": "Neural Network",
        "definition": "A series of algorithms that attempt to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates."
    }
]);

  function updateFlashcard(id,title){
   const updatedFlashcards= datas.map((data)=>{
    if(id==data.id){
      return {...data,title}
      
    }
    return data;
   })
   setDatas(updatedFlashcards)
  }

  function addFlashcard(title,definition){
    const newData= {
      id: Math.random()*10,
      title,
      definition
    }
    setDatas([...datas,newData])
  }

  return (
    <div className='mx-auto text-center bg-gray-100 min-h-screen'>
      <h1>Quizzi</h1>
      <p>Create and study flashcards easily</p>
       <NavMenu addFlashcard={addFlashcard}/>
       <Nav/>
      <div className="container mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       {
        datas.map((data)=>{
         const editModal= <EditModal 
         title={data.title} 
         id={data.id} 
         updateFlashcard={updateFlashcard}
         />
         return(<Flashcard key={data.id} id={data.id} title={data.title} updateFlashcard={updateFlashcard} definition={data.definition} editModal={editModal}/>) 
        })
       }
      </div>
    </div>
  );
};

export default App;
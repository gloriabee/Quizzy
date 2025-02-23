import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import EditModal from './components/AddModal';
import NavMenu from './components/NavMenu';
import AddModal from './components/AddModal';

const App = () => {


  return (
    <div className='mx-auto text-center'>
      <h1>Quizzi</h1>
      <p>Create and study flashcards easily</p>
       <NavMenu/>
       
      <div className="container mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Flashcard/>
      </div>
    </div>
  );
};

export default App;
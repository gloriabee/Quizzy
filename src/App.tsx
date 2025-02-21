import React, { useState } from 'react';
import Flashcard from './components/Flashcard';

const App = () => {
  const [datas, setData] = useState([
    {
      title: 'Biology',
      description: 'Biology is the study of living things.'
    },
    {
      title: 'Cell Theory',
      description: 'Cell theory states that all living organisms are composed of cells, and cells are the basic unit of life.'
    },
    {
      title: 'Photosynthesis',
      description: 'Photosynthesis is the process by which green plants convert sunlight, water, and carbon dioxide into glucose and oxygen.'
    },
    {
      title: 'DNA',
      description: 'DNA (Deoxyribonucleic Acid) is the molecule that carries genetic instructions for the development, functioning, and reproduction of all known living organisms.'
    },
    {
      title: 'Evolution',
      description: 'Evolution is the process by which different kinds of living organisms develop and diversify from earlier forms over time, driven by natural selection.'
    },
    {
      title: 'Ecosystem',
      description: 'An ecosystem is a community of living organisms interacting with each other and their physical environment, forming a functional unit.'
    }
  ]);

  return (
    <>
      <div className="container mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {datas.map((d, index) => (
          <Flashcard key={index} title={d.title} description={d.description} />
        ))}
      </div>
    </>
  );
};

export default App;
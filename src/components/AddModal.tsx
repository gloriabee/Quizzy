import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddModal(props) {
  const [title,setTitle]=useState('')
  const [definiton,setDefinition]=useState('')
  // const [category,setCategory]=useState('')


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add flashcard
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create new flashcard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
        className="space-y-6" 
         method="POST"
          id='addModal'
          onSubmit={(e)=>{
            e.preventDefault();
            props.addFlashcard(title,definiton)
            handleClose();
          }}>
      <div>
        <label className="block text-sm/6 font-medium text-gray-900"
        htmlFor='title'>Title</label>
        <div className="mt-2">
          <input type="text"
           name="title" 
           id="title"
           onChange={(e)=>{
            setTitle(e.target.value)
           }}
            required 
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor='definition'
           className="block text-sm/6 font-medium text-gray-900">Definition</label>
        </div>
        <div className="mt-2">
        <textarea 
        name="definition"
         id="definition" 
         rows="3" 
         class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
         onChange={(e)=>{
          setDefinition(e.target.value)
         }}></textarea>
        </div>
      </div>

      <div>
      <div className="flex items-center justify-between">
          <label className="block text-sm/6 font-medium text-gray-900">
            Category
          </label>
        </div>
        <div className="mt-2">
        <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <option>Select a category</option>
              <option>Botany</option>
              <option>Programming</option>
              <option>Web Development</option>
      </select>
        </div>
     
      </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"
           form='addModal' 
           type='submit'>
            Create Flashcard
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditModal(props) {
  const [title,setTitle]= useState(props.title)
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Flashcard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<form 
        onSubmit={(e)=>{
          e.preventDefault();
          console.log('hello from ');
          console.log(props.id, title)
          props.updateFlashcard(props.id, title);
          handleClose()
        }}
        className="space-y-6" 
         method="POST"
          id='editModal'
        >
      <div>
        <label
        htmlFor='title'
        className="block text-sm/6 font-medium text-gray-900">
          Title.
        </label>
        <div className="mt-2">
          <input type="text"
           name="title" 
           onChange={(e)=>{setTitle(e.target.value)}}
           value={title}
           id="title"
            required 
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                 className="block text-sm/6 font-medium text-gray-900" htmlFor='definition'>Definition</label>
              </div>
              <div className="mt-2">
              <textarea 
              name="definition"
              id="definition" 
              rows="3" 
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
              </div>
            </div>
      <div>
      <div className="flex items-center justify-between">
          <label htmlFor='category'
          className="block text-sm/6 font-medium text-gray-900">
            Category
          </label>
        </div>
        <div className="mt-2">
        <select 
        id="country" 
        name="country" 
        autoComplete="country-name" 
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
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
          <button
           type='submit'
           className='bg-purple-500 p-2 text-white rounded-md' form='editModal'>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
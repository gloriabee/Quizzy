import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddCategory = () => {
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>
        <Button variant="primary" onClick={handleShow}>
        Add Category
        </Button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
        className="space-y-6" 
         method="POST"
          id='addModal'
          onSubmit={(e)=>{
            e.preventDefault();
            console.log('Added successfully')
            handleClose();
          }}>
      <div>
        <label className="block text-sm/6 font-medium text-gray-900">Title</label>
        <div className="mt-2">
          <input type="text"
           name="title" 
           id="title"
            required 
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>


      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" form='addModal' type='submit'>
            Add category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddCategory

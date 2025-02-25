import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdModeEdit } from "react-icons/md";
function EditEmployee(props) {
  const [show, setShow] = useState(false);

  const [name,setName]= useState(props.name)
  const [role,setRole]=useState(props.role)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <MdModeEdit />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
  <form id='editEmployee' 
  onSubmit={(e)=>{
    e.preventDefault()
    props.updateEmployee(props.id,name,role);
    handleClose()
  }} 
  method='POST'
  >
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Name
      </label>
      <input 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="name"
       type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Role
      </label>
      <input 
      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="role" 
      value={role}
      onChange={(e)=>setRole(e.target.value)}/>
    
    </div>
  
  </form>
 

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
           type='submit' 
           form='editEmployee'>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
import Modal from "../3.Modal/Modal"
import {useState} from 'react'
// import './editTask.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../../../../../../firebase'

function EditTask({open, onClose, toEditUrl, toEditDescription, id}) {

  const [url, setUrl] = useState(toEditUrl)
  const [description, setDescription] = useState(toEditDescription)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await updateDoc(taskDocRef, {
        url: url,
        description: description
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Edit Task' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editTask'>
        <input type='text' name='url' onChange={(e) => setUrl(e.target.value.toUpperCase())} value={url}/>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditTask

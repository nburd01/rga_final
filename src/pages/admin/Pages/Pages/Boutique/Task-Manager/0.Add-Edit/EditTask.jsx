import Modal from "../3.Modal/Modal"
import {useState} from 'react'
import './editTask.scss'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../../../../../../firebase'

function EditTask({open, onClose, toEditUrl, id}) {

  const [url, setUrl] = useState(toEditUrl)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'boutiques', id)
    try{
      await updateDoc(taskDocRef, {
        url: url,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Modifier' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editTask'>
        <input type='text' name='url' onChange={(e) => setUrl(e.target.value)} value={url}/>
        <button type='submit'>Soumettre</button>
      </form> 
    </Modal>
  )
}

export default EditTask

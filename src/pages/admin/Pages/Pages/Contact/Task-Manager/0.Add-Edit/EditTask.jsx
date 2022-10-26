import Modal from "../3.Modal/Modal"
import {useState} from 'react'
import './editTask.scss'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../../../../../../firebase'
import { useDispatch } from "react-redux";
import { setReduxEmail } from "../../../../../../../store/contactSlice";

function EditTask({open, onClose, toEditEmail, toEditTéléphone, id}) {

  const [email, setEmail] = useState(toEditEmail)
  const [téléphone, setTéléphone] = useState(toEditTéléphone)
  const dispatch = useDispatch();
  console.log("email",email)

  const [newEmail, setNewEmail] = useState("")
  

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    dispatch(
      setReduxEmail({
        email: newEmail,
      })
    );
    const taskDocRef = doc(db, 'contacts', id)
    try{
      await updateDoc(taskDocRef, {
        email: email,
        téléphone: téléphone,
      })
      onClose()
    } catch (err) {
      alert(err)
    } 
  }

  return (
    <Modal modalLable='Modifier' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editTask'>
        <input type='text' name='email' onChange={(e) => setNewEmail(e.target.value)} value={newEmail} />
        <input type='text' name='téléphone' onChange={(e) => setTéléphone(e.target.value)} value={téléphone}/>
        <button type='submit'>Soumettre</button>
      </form>
    </Modal>
  )
}

export default EditTask

import Modal from "../3.Modal/Modal"
import {useState} from 'react'
import './editTask.scss'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../../../../../../firebase'
import { useDispatch } from "react-redux";
import { setReduxContact } from "../../../../../../../store/contactSlice";

function EditTask({open, onClose, toEditEmail, toEditTéléphone, id}) {

  const [email, setEmail] = useState(toEditEmail)
  const [téléphone, setTéléphone] = useState(toEditTéléphone)
  const dispatch = useDispatch();
  console.log("email",email)

  const [newEmail, setNewEmail] = useState("")
  const [newTelephone, setNewTelephone] = useState("")
  

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    dispatch(
      setReduxContact({
        email: newEmail,
        téléphone: newTelephone,
      }),
      // setReduxTelephone({
      // })
    );
    const taskDocRef = doc(db, 'contacts', id)
    try{
      await updateDoc(taskDocRef, {
        email: newEmail,
        téléphone: newTelephone,
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
        <input type='text' name='téléphone' onChange={(e) => setNewTelephone(e.target.value)} value={newTelephone}/>
        <button type='submit'>Soumettre</button>
      </form>
    </Modal>
  )
}

export default EditTask

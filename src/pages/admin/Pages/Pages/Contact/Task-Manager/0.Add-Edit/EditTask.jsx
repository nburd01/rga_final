import Modal from "../3.Modal/Modal"
import {useState} from 'react'
import './editTask.scss'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../../../../../../firebase'



function EditTask({open, email, téléphone, onClose, toEditEmail, toEditTéléphone, id}) {

  const [newEmail, setNewEmail] = useState(toEditEmail)
  const [newTéléphone, setNewTéléphone] = useState(toEditTéléphone)
  console.log("email",email)
  

  /* function to update firestore */
    const handleUpdateEmail = async (e) => {
      e.preventDefault()
      const taskDocRef = doc(db, 'contacts', id)
      try{
        await updateDoc(taskDocRef, {
          email: newEmail, 
        })
        onClose()
      } catch (err) {
        alert(err)
      }
    }

    const handleUpdateTelephone = async (e) => {
      e.preventDefault()
      const taskDocRef = doc(db, 'contacts', id)
      try{
        await updateDoc(taskDocRef, {
          téléphone: newTéléphone,   
        })
        onClose()
      } catch (err) {
        alert(err)
      }
    }

  return (
    <Modal modalLable='Modifier' onClose={onClose} open={open}>
      <>
        <p>Email</p>
        <input type='text' name='Email' onChange={(e) => setNewEmail(e.target.value)} placeholder='Email' defaultValue={email} maxlength="100"/>
        <button onClick={handleUpdateEmail}>Mettre à jour l'email</button>
        
        <p>Téléphone</p>
        <input type='text' name='Téléphone' onChange={(e) => setNewTéléphone(e.target.value)} placeholder="Téléphone" defaultValue={téléphone}/>
        <button onClick={handleUpdateTelephone}>Mettre à jour le numéro de téléphone</button>
      </>
    </Modal>
  )
}

export default EditTask

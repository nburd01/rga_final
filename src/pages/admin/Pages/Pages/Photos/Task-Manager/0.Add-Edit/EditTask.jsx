import Modal from "../3.Modal/Modal"
import {useState} from 'react'
import './editTask.scss'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../../../../../../firebase'



function EditTask({open, photos, téléphone, onClose, toEditPhotos, toEditTéléphone, id}) {

  const [newPhotos, setNewPhotos] = useState(toEditPhotos)
  const [newTéléphone, setNewTéléphone] = useState(toEditTéléphone)
  console.log("photos",photos)
  

  /* function to update firestore */
    const handleUpdatePhotos = async (e) => {
      e.preventDefault()
      const taskDocRef = doc(db, 'photos', id)
      try{
        await updateDoc(taskDocRef, {
          photos: newPhotos, 
        })
        onClose()
      } catch (err) {
        alert(err)
      }
    }

    const handleUpdateTelephone = async (e) => {
      e.preventDefault()
      const taskDocRef = doc(db, 'photos', id)
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
        <p>Photos</p>
        <input type='text' name='Photos' onChange={(e) => setNewPhotos(e.target.value)} placeholder='Photos' defaultValue={photos} maxlength="100"/>
        <button onClick={handleUpdatePhotos}>Mettre à jour l'photos</button>
        
        <p>Téléphone</p>
        <input type='text' name='Téléphone' onChange={(e) => setNewTéléphone(e.target.value)} placeholder="Téléphone" defaultValue={téléphone}/>
        <button onClick={handleUpdateTelephone}>Mettre à jour le numéro de téléphone</button>
      </>
    </Modal>
  )
}

export default EditTask

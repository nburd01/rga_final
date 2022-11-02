import Modal from "../3.Modal/Modal"
import {useState} from 'react'
import './editTask.scss'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../../../../../../firebase'

function EditTask({open, onClose, toBlogTitle, toBlogImg, toBlogDescription, toBlogBody, id}) {

  const [blogTitle, setBlogTitle] = useState(toBlogTitle)
  const [blogImg, setBlogImg] = useState(toBlogImg)
  const [blogDescription, setBlogDescription] = useState(toBlogDescription)
  const [blogBody, setBlogBody] = useState(toBlogBody)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'blogs', id)
    try{
      await updateDoc(taskDocRef, {
        blogTitle: blogTitle,        
        blogImg: blogImg,
        blogDescription: blogDescription,
        blogBody: blogBody,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Modifier' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editTask'>
        <input type='text' name='blogTitle' onChange={(e) => setBlogTitle(e.target.value)} value={blogTitle}/>
        <input type='text' name='blogImg' onChange={(e) => setBlogImg(e.target.value)} value={blogImg}/>
        <input type='text' name='blogDescription' onChange={(e) => setBlogDescription(e.target.value)} value={blogDescription}/>
        <input type='text' name='blogBody' onChange={(e) => setBlogBody(e.target.value)} value={blogBody}/>
        <button type='submit'>Soumettre</button>
      </form> 
    </Modal>
  )
}

export default EditTask

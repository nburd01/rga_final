import Modal from "../3.Modal/Modal"
import {useState} from 'react'
import './editTask.scss'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../../../../../../../firebase'


function EditTask({open, onClose, blogTitle, blogImg, blogDescription, linkUrl, blogBody, toBlogTitle, toBlogImg, toBlogDescription, toBlogBody, id}) {

  const [newBlogTitle, setNewBlogTitle] = useState(toBlogTitle)
  const [newBlogDescription, setNewBlogDescription] = useState(toBlogDescription)
  const [newBlogBody, setNewBlogBody] = useState(toBlogBody)
  const [newBlogImg, setNewBlogImg] = useState(toBlogImg)
  const [newLinkUrl, setNewLinkUrl] = useState(toBlogImg)


  /* function to update firestore */
  const handleUpdateTitle = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'blogs', id)
    try{
      await updateDoc(taskDocRef, {
        blogTitle: newBlogTitle,        
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
  const handleUpdateImg = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'blogs', id)
    try{
      await updateDoc(taskDocRef, {
        blogImg: newBlogImg
      })    
      onClose()
    } catch (err) {
      alert(err)
    }
  }


  const handleUpdateDescription = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'blogs', id)
    try{
      await updateDoc(taskDocRef, {
        blogDescription: newBlogDescription,        
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  const handleUpdateBody = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'blogs', id)
    try{
      await updateDoc(taskDocRef, {
        blogBody: newBlogBody,        
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  const handleUpdateUrl = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'blogs', id)
    try{
      await updateDoc(taskDocRef, {
        linkUrl: newLinkUrl,        
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Modifier' onClose={onClose} open={open}>
    <>
        <p>titre</p>
        <textarea type='text' name='blogTitle' onChange={(e) => setNewBlogTitle(e.target.value)} placeholder='Titre' defaultValue={blogTitle} maxlength="100"/>
        <button onClick={handleUpdateTitle}>Mettre à jour le titre</button>
        
        <p>Image</p>
        <input type='text' name='blogImg' onChange={(e) => setNewBlogImg(e.target.value)} placeholder="Url de l'image" defaultValue={blogImg}/>
        <button onClick={handleUpdateImg}>Mettre à jour l'image</button>

        <p>Description</p>
        <textarea type='text' name='blogDescription' onChange={(e) => setNewBlogDescription(e.target.value)} placeholder='Description' defaultValue={blogDescription} maxlength="150" />
        <button onClick={handleUpdateDescription}>Mettre à jour la description</button>
        <p>Corps</p>
        <textarea type='text' name='blogBody' onChange={(e) => setNewBlogBody(e.target.value)} placeholder='Corps' defaultValue={blogBody}/>
        <button onClick={handleUpdateBody}>Mettre à jour le corps</button>

        <p>Lien</p>
        <textarea type='link' name='linkUrl' onChange={(e) => setNewLinkUrl(e.target.value)} placeholder='Url du lien' defaultValue={linkUrl}/>
        <button onClick={handleUpdateUrl}>Mettre à jour le corps</button>
    </>
    </Modal>
  )
}

export default EditTask

import Modal from "../3.Modal/Modal"
import {useEffect, useState} from 'react'
import './editTask.scss'
import { doc, updateDoc } from "firebase/firestore";
import {db, storage} from '../../../../../../../firebase'
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function EditTask({open, onClose, blogTitle, blogImg, blogDescription, blogBody, toBlogTitle, toBlogImg, toBlogDescription, toBlogBody, id}) {

  const [newBlogTitle, setNewBlogTitle] = useState(toBlogTitle)
  const [newBlogDescription, setNewBlogDescription] = useState(toBlogDescription)
  const [newBlogBody, setNewBlogBody] = useState(toBlogBody)

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [newBlogImg, setNewBlogImg] = useState(null);


  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `blog/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("imageUploaded");
    });
  };
  console.log("imageUpload",imageUpload)
  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  // })}, []);


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

  return (
    <Modal modalLable='Modifier' onClose={onClose} open={open}>
    <>
        <input type='text' name='blogTitle' onChange={(e) => setNewBlogTitle(e.target.value)} defaultValue={blogTitle}/>
        <button onClick={handleUpdateTitle}>Mettre à jour</button>

        {/* <input type='text' name='images_blog' onChange={(e) => setNewBlogImg(e.target.value)} defaultValue={images_blog}/>
        <button onClick={handleUpdateImg}>Mettre à jour</button> */}

        <input 
          type='file'
          onChange={(event) => {setImageUpload(event.target.files[0])}}
          name='blogImg'/>
        <button onClick={uploadImage}>Télécharger l'image</button>

        <input type='text' name='blogDescription' onChange={(e) => setNewBlogDescription(e.target.value)} defaultValue={blogDescription}/>
        <button onClick={handleUpdateDescription}>Mettre à jour</button>

        <input type='text' name='blogBody' onChange={(e) => setNewBlogBody(e.target.value)} defaultValue={blogBody}/>
        <button onClick={handleUpdateBody}>Mettre à jour</button>
    </>
    </Modal>
  )
}

export default EditTask

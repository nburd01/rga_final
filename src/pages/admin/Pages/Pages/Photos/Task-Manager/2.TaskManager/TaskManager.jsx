import { db, storage } from "../../../../../../../firebase";
import AddTask from "../0.Add-Edit/AddTask";
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import Task from "../1.Task/Task";
import React from 'react'
import "./UploadImages.scss"
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import {v4} from 'uuid';
import { AuthModeContext } from '/home/niall01/TheHackingProject/rga_final/src/context/AuthContext.js';
import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';

function TaskManager({ setSelectedImg }) {

    const [openAddModal, setOpenAddModal] = useState(false)
    const [photos, setBoutiques] = useState([])
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const {currentUser} = useContext(AuthModeContext);
    const RequireAuth = ({children}) => {
      return currentUser ? (children) : <Navigate to="/multimedia"/>
    };
    const imageListRef = ref(storage, `images/`);

    const uploadImage = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      });
    };
  
    useEffect(() => {
      listAll(imageListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [...prev, url]);
          });
        });
    })}, []);
    /* function to get all tasks from firestore in realtime */ 
    useEffect(() => {
      const taskColRef = query(collection(db, 'photos'), orderBy('created', 'desc'))
      onSnapshot(taskColRef, (snapshot) => {
        setBoutiques(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    },[])
  
    return (
      <div className='taskManager'>
        <div className='taskManager__container'>

          <div className='taskManager__tasks'>
  
            {photos.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                completed={task.data.completed}
                photos={task.data.photos} 
                téléphone={task.data.téléphone} 
              />
            ))}
  
          </div>
          <button className="task__deleteNedit"
          onClick={() => setOpenAddModal(true)}>
          Ajouter un élément
        </button>
        </div>
  
        {openAddModal &&
          <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
        }

        <div className="photos">
        <div className='adminPanel'>
        <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
        />
        <button onClick={uploadImage}>Télécharger des images</button>
      </div>

      <div className="container img-grid">
            {imageList.map((url, index) => {
              return(
                <motion.div  className="img-wrap" key={index} whileHover={{ opacity: 1 }}>
                  <motion.img key={index} src={url} alt={url} onClick={() => setSelectedImg(url) }
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1 }}
                              effect="blur"
                  />
                </motion.div>
              ) 
          })}
      </div> 
        </div>
      </div>
    )
  }
  
  export default TaskManager
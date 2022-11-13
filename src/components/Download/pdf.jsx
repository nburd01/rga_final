import React from 'react'
import { useState } from "react";  
// import "./UploadImages.scss"
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../firebase";
import {v4} from 'uuid';
import { AuthModeContext } from '../../context/AuthContext';
import { useContext, useEffect } from "react";
import { Navigate } from 'react-router-dom';


export default function PDF() {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const {currentUser} = useContext(AuthModeContext);
  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/multimedia"/>
  };

  const imageListRef = ref(storage, `images/`);
//   console.log("imageListRef",imageListRef)
//   console.log("storage",storage)

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


  return(
    <>
      {currentUser == null

      ?

      <>
      </>
        
      : 

      <div className='adminPanel'>
        <h1>Administrateur</h1>
        <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
        />
        <button onClick={uploadImage}>Télécharger des images</button>
      </div>}

      <div className="cont">
            {imageList.map((url, index) => {
            return <img key={index}  src={url} alt={url}/>;
          })}
        </div> 
    </>
  );

}

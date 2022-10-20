import React from 'react'
import { useState } from "react";  
import "./uploadForm.scss"
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


export default function UploadForm() {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const {currentUser} = useContext(AuthModeContext);
  const RequireAuth= ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };
  console.log("currentUser_Again", currentUser);



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


  return(
    <>
      {currentUser == null

      ?

      <div>
        {/* <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload Image</button>
        <div className="cont">
          {imageList.map((url, index) => {
            return <div> <img key={index} src="{url}" alt='Roazhon Goal Academy'/> <p>test</p> </div>;
          })}
          <image></image>
        </div> */}
        <h1>LOGGEDOUT</h1>
      </div>
        
      : 

      // <div className="cont">
      //     {imageList.map((url, index) => {
      //     return <img key={index}  src={url} alt={url}/>;
      //   })}
      // </div> }
      <div>
        <h1>LOGGEDIN</h1>
        
      </div>}
    </>
  );

}

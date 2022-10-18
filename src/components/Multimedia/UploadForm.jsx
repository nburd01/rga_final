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
import { useEffect } from 'react';
// import {useDispatch} from 'react-redux'
import url, {NavUrl} from '../../features/url'


export default function UploadForm() {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [ url, setUrl] = useState(false)

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
    <div>
      {url ?
      <div>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
      </div>
    : <div></div> }

      <div className="cont">
      {imageList.map((url) => {
        return <img src={url} alt='some value'/>;
      })}
      </div>
    </div>
  );

}

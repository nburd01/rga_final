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


export default function UploadForm() {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, `images/`);

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("uploaded");
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
    <div className="cont">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
      {imageList.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );

}

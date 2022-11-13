import React, { useState } from 'react'
import { storage } from '../../../../../firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { useEffect } from 'react';

export const AdmDocument = () => {

  const [fileUpload, setFileUpload] = useState();
  const [fileList, setFileList] = useState([]);

  const fileListRef = ref(storage, `inscriptions/`);
  console.log("fileList",fileList[0])

  const uploadFile = () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `inscriptions/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url])
      })
    });
  };

  const downloadFile = () => {
    const element = document.createElement("a");
    element.setAttribute("href", fileList[0]);
    element.setAttribute("download", fileList[0]);
    element.click();

  }

useEffect(() => {
  listAll(fileListRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
    });
})}, []);

  return (
    <div>
      <input type="file" onChange={(e) => {setFileUpload(e.target.files[0])}}/>
      <button onClick={uploadFile}>Télécharger le dossier</button>
      <div className="cont">
            {fileList.slice(0,1).map((url, index) => {
            return <img key={index}  src={url} alt="file"/>;
          })}
        </div> 
      <button onClick={downloadFile}>Télécharger localement</button>
    </div>
  )
}

import React, { useState } from 'react'
// import { Gallery } from './Gallery'
import UploadImages from './PhotoManager/UploadImages'
import './photos.scss'
import Modal from './PhotoManager/Modal'

export const Photos = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
  <div className="container Photogallery">
    <div>

    <div className="_TitleSubTitle" data-aos="fade-up">
     <h6 className="_BgTitle Left">Photos</h6>
    </div>
     <h3 className="_BgSubTitle Left">Photos</h3>
    </div>
    <div className='photo'>
      <UploadImages setSelectedImg={setSelectedImg}/>
      {selectedImg && 
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
      }
    </div>
  </div>
  )
}

import React from 'react'
import { Gallery } from './Gallery'
import UploadImages from './UploadImages'
import './photos.scss'

export const Photos = () => {
  return (
  <div className="container Photogallery">
    <div>

    <div className="_TitleSubTitle" data-aos="fade-up">
     <h6 className="_BgTitle Left">Photos</h6>
    </div>
     <h3 className="_BgSubTitle Left">Photos</h3>
    </div>
    <div className='photo'>
      <UploadImages/>
      {/* <Gallery/> */}
    </div>
  </div>
  )
}

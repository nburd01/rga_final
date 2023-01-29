import React from 'react'
import './PageNotFound.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PageNotFound() {
  return (
    <div className='container NotFound'>
      <h1>404</h1>
      <p>Nous ne trouvons pas la page souhaitée</p>
    </div>
  )
}

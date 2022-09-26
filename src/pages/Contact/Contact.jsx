import React from 'react'
import { ContactComp } from '../../components/Contact/Contact'

export const Contact = () => {
  return (
    <page className='contact'>
      <div className="container-large">
      <div className="container Right">
          <div className="_TitleSubTitle">
        <h6 className="_BgTitle Right">Contact</h6>
        </div>
      <ContactComp/>
      </div>
      </div>
    </page>
  )
}

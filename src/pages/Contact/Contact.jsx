import React from 'react'
import { ContactComp } from '../../components/Contact/Contact'

export const Contact = () => {
  return (
    <page className='contact'>
      <div className="container Right">
          <div className="_TitleSubTitle">
        <h6 className="_BgTitle Right">Contact</h6>
        <h3 className="_BgSubTitle Right">Contact</h3>
        </div>
      <ContactComp/>
      </div>
    </page>
  )
}

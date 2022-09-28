import React from 'react'
import { Dim } from './Dim'
import './Horaires.scss'
import { LunMar } from './LunMar'

export const HorairesComp = () => {
  return (
    <div className="container Right">
      <div className="_TitleSubTitle">
        <h6 className="_BgTitle Right">Infrastructures</h6>
        <h3 className="_BgSubTitle Right">Infrastructures</h3>
      </div>
      <div className="container Right">
        <div className='Card __primary'>
        <LunMar/>
        </div>
        <div className='Card __primary'>
        <Dim/>
        </div>
      </div>
    </div>
  )
}

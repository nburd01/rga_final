import React from 'react'
import { Dim } from './Dim'
import './Horaires.scss'
import { LunMar } from './LunMar'

export const HorairesComp = () => {
  return (
    <div>
    <h6 className="_BgTitle Left">Horaires</h6>
    <h3 className="_BgSubTitle Left">Horaires</h3>
    <div className='Card'>
      <LunMar/>
    </div>
    <div className='Card'>
      <Dim/>
    </div>
  </div>
  )
}

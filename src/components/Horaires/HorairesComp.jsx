import React from 'react'
import { Dim } from './Dim'
import './Horaires.scss'
import { LunMar } from './LunMar'

export const HorairesComp = () => {
  return (
    <div className="container_card Center">
      <div className="_TitleSubTitle">
        <h6 className="_BgTitle Center">Horaires</h6>
        <h3 className="_BgSubTitle Center">Horaires</h3>
      </div>
      <div className="container Center">
        <LunMar/>
        </div>
        <Dim/>
    </div>
  )
}

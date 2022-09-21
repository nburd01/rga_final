import React from 'react'
import { HorairesComp } from '../../components/Horaires/HorairesComp'
import { Planification } from '../../components/Planification/Planification'

export const HorairesPage = () => {
    return (
    <div>
       
        <div className="styledUnderlignComp">
          <HorairesComp/>
      </div>
        <div className="styledUnderlignComp">
          <Planification/>
      </div>
    </div>
    )
}


import React from 'react'
import { BoutiqueUrl} from '../../../../../props/boutiqueUrl'

export const Adm_boutique = () => {
  return (
    <div>
      <h3>Boutique</h3>
        <BoutiqueUrl/>
      <form>
        <p>Nouveau Lien</p>
        <input type="text" />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

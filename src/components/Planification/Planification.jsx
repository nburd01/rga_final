import React from 'react'

export const Planification = () => {
  return (
<div className="container Left">
  <div className="_TitleSubTitle" data-aos="fade-up">
  <h6 className="_BgTitle Left">Planification</h6>
  <h3 className="_BgSubTitle Left">Planification</h3>
  </div>
    <div className='container Left'>
      <div className='Card __primary planification' style={{overflow:"auto"}} data-aos="fade-up">
        <table>
          
          <tr>
            <th>Groupes</th>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Dimanche*</th>
          </tr>
          <tr>
            <td><p>2012/2013</p></td>
            <td><p>17h45-19h00</p></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><p>2010/2011</p></td>
            <td></td>
            <td><p>17h45-19h00</p></td>
            <td></td>
          </tr>
          <tr>
            <td><p>2011/2012</p></td>
            <td></td>
            <td></td>
            <td><p>9h30–10h45</p></td>
          </tr>
          <tr>
            <td><p>2009/2010</p></td>
            <td></td>
            <td></td>
            <td><p>11h00-12h15</p></td>
          </tr>
        </table>
        <p>*Ou à 11h en fonction du nombre de participants.</p>
      </div>
    </div>
  </div>
  )
}

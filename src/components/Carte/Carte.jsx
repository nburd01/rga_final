import React from 'react'

export const Carte = () => {
  return (
    <div className='container'>
      <div class="map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1101.498428369115!2d-1.805087330469861!3d48.10228854129204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ee24a0bc5f8af%3A0x63a9c8975ee1597c!2sStade%20-%20Le%20Rheu%20Rugby!5e1!3m2!1sfr!2ses!4v1663841310614!5m2!1sfr!2ses"style={{float : 'left', paddingRight : '5px'}} width="600" height="auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
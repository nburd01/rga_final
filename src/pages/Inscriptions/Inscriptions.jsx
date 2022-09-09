import React from 'react'

export const Inscriptions = () => {
  return (
    <div className="container">

      <h1>S'inscrire à la  RGA</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home1.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Abonnements</h6>
        <h3 className="_BgSubTitle Left">Abonnements</h3>
        <p>- Premier abonnement = 70 euros
Abonnement annuel à la Roazhon Goal Academy + 1 paire de gants Uhlsport
+ livret pédagogique illustré "je suis goal" + 1 ensemble Uhlsport (maillot,
short, chaussettes)
- Ré-abonnement = 50 euros
Abonnement annuel à la Roazhon Goal Academy + 1 paire de gants Uhlsport
+ 1 ensemble Uhlsport (maillot, short, chaussettes)
- 5 euros : participation à chaque séance spécifique.
Exemple :
- Cycle 1 = 1er Abonnement + 2 spécifiques : 70 + 10 = 70 euros
- Cycle 2 = 2 spécifiques : 10 euros</p>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Right">Inscriptions</h6>
        <h3 className="_BgSubTitle Right">Inscriptions</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Renseignement</h6>
        <h3 className="_BgSubTitle Left">Renseignement</h3>
      </div>
      
    </div>


  )
}

import React from 'react'

export const Seances = () => {
  return (
    <div className="container">

    <h1>Les séances</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
    <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home4.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Séances</h6>
        <h3 className="_BgSubTitle Left">Séance type</h3>
        <p>LUNDI / MARDI :
Accueil à partir de 17h15 au terrain
Mise en tenue dans les vestiaires
Début de séance à 17h45
Fin de séance à 19h15
DIMANCHE :
En fonction du nombre de participants, séance pour tous à 11h sinon :
Groupe 2012/2013 : accueil à partir de 9h
Mise en tenue dans les vestiaires
Début de séance 9h30 groupe
Fin de séance 10h45
Groupe 2010/2011 : accueil à partir de 10h30
Mise en tenue dans les vestiaires
Début de séance 11h
Fin de séance 12h15</p>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Right">Matériel</h6>
        <h3 className="_BgSubTitle Right">Le matériel</h3>
        <p>Partenariat avec la marque UHLSPORT pour les équipements (Paires
offertes à l'inscription + réduction sur les achats boutiques).
Livret "je suis goal" offert à l'inscription (Support pédagogique : devoirs à
faire en club et à la maison !).
Ballons neufs et réservés à la RGA pour effectuer la saison.
Matériel classique de séance terrain mis à disposition par le SC Le Rheu.
Matelas DIMA d'athlétisme.
Création d'une tenue logotée.</p>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Planification</h6>
        <h3 className="_BgSubTitle Left">Planification</h3>
        <p>Cycles d'entraînements calés sur le rythme scolaire.
Pas de séances pendant les vacances. Il sera nécessaire de télécharger
l’application « Team Pulse » pour faciliter la transmission des informations.
Premier spécifique lundi 13/09/2020.
2 séances semaine + 1 dimanche matin sur 2
Lundi soir 2012/2013 : 17h45-19h15
Mardi soir 2010/2011 : 17h45-19h15
Dimanche matin : 2011/2012 : 9h30 – 10h45
2009/2010 : 11h – 12h15
OU Tous à 11h en fonction du nombre de participants</p>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Right">Horaires</h6>
        <h3 className="_BgSubTitle Right">Horaires</h3>
      </div>
  
  </div>
  )
}

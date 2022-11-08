import React from 'react'
import { Email } from '../../components/Contact/Email'
import { Telephone } from '../../components/Contact/telephone'
import {db} from '../../firebase.js'
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet';

export const Contact = () => {
  const [boutiques, setBoutiques] = useState([]);
  const boutiquesCollectionRef = collection(db, "boutiques");


  useEffect(() => {
    const getBoutiques = async () => {
      const data = await getDocs(boutiquesCollectionRef);
      console.log("data",data)
      setBoutiques(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getBoutiques()
  }, [])


  return (
    <div className='contact'>
      {/* <SEO
      title="Page contact de la Roazhon Goal Academy"
      description="Bienvenue à la Roazhon Goal Academy. Nous proposons des entraînements spécifiques de gardiens de but au travers de séances techniques et ludiques pour les 10 - 13 ans à proximité de Rennes !"
      name="Bienvenue à la Roazhon Goal Academy"
      type="accueil"
      /> */}
       <Helmet>
        <title>Contacter la Roazhon Goal Academy</title>
        <description>La Roazhon Goal Academy reste en contact avec ses stagiaires</description>
        <meta 
        title="Page contact de la Roazhon Goal Academy"
        name='Roazhon Goal Academy Contact' 
        content='La Roazhon Goal Academy reste en contact avec ses stagiaires'
        />
        <meta name='keywords' content='Contact, Football, Academy, Roazhon Goal Academy, Le Rheu, Rennes, Gardiens de but, spécifiques, jeunes, formation' />
      </Helmet>
      <div className="container-large">
      <div className="__intro">

        <div className="PicTitle">
          <div className="_TitleSubTitle" data-aos="fade-up">
            <h1>Contact</h1>
            <h3>Pour tout renseignement, merci de nous contacter par e-mail ou bien par téléphone.</h3>
          </div>
          <div className="HeroImage">
            <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__gardien_de_but_proprioception.jpg')} className="_HeroImage" alt="Roazhon Goal Academy proprioception" loading="lazy"/>
          </div>
        </div>
      </div>
      </div>

      <section className="pageBody">
      <Email/>
      <Telephone/>
      </section>
    </div>
  )
}

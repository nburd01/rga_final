import React from 'react'
import { Email } from '../../components/Contact/Email'
import { Telephone } from '../../components/Contact/Telephone'
import {db} from '../../firebase.js'
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from "react-lazy-load-image-component";

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
       <Helmet>
        <title>Roazhon Goal Academy Contact</title>
        <meta 
        name='description' 
        content='La Roazhon Goal Academy reste en contact avec ses stagiaires'
        />
        <link rel='canonical' href="/contact"/>
  
      </Helmet>
      <div className="container-large">
      <div className="__intro">

        <div className="PicTitle">
          <div className="_TitleSubTitle" data-aos="fade-up">
            <h1>Contact</h1>
            <h3>Pour tout renseignement, merci de nous contacter par e-mail ou bien par téléphone.</h3>
          </div>
          <div className="HeroImage">
            <LazyLoadImage src={require('../../assets/img/galerie/webp/roazhon_goal_academy__gardien_de_but_proprioception.jpg')} className="_HeroImage" alt="Roazhon Goal Academy proprioception" loading="lazy"/>
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

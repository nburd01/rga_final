import React from 'react'
import { Email } from '../../components/Contact/Email'
import { Telephone } from '../../components/Contact/telephone'
import {db} from '../../firebase.js'
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';

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
      <div className="container-large">
      <div className="__intro">

        <div className="PicTitle">
          <div className="_TitleSubTitle" data-aos="fade-up">
            <h1>Contact</h1>
            <h3>Pour tout renseignement, merci de nous contacter par e-mail ou bien par téléphone.</h3>
          </div>
          <div className="HeroImage">
            <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__gardien_de_but_proprioception.jpg')} className="_HeroImage" alt="img" loading="lazy"/>
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

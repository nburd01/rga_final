import React from 'react'
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../firebase.js'

export const BoutiqueUrl = () => {

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
    <div>
      <p>Lien actuel: {boutiques.map((boutique) => {
          return (
            <a href={boutique.url} target="_blank" rel="noreferrer">{boutique.url}</a>
          )
        })}</p>
    </div>
  )
}

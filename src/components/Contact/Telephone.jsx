import { collection, onSnapshot} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import LoadingSpinner from "../Loading/Loading";

export const Telephone = () => {
  const [téléphones, setTéléphones] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "contacts");
    onSnapshot(articleRef, (snapshot) => {
      const téléphones = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTéléphones(téléphones);
      console.log("email",téléphones[0].email);
    });
  }, []);

  return (
    <div className='container Right'>
        <div className="_TitleSubTitle" data-aos="fade-up">
          <h6 className="_BgTitle Right">Téléphone</h6>
          <h3 className="_BgSubTitle Right">Téléphone</h3>
        </div>
        <div className="container Right">
        <div className='Card __primary' data-aos="fade-up">
        {téléphones.length === 0 ? (
          <>
          <LoadingSpinner/>
          </>
        ) 
        :
        (
          téléphones.slice(0, 1).map(
            ({
              id,
              téléphone, 
            }) => (
            <div className="quote-wrapper">
              <div className="contactIcon">
                <div key={id}>
                    <div className="quote-wrapper">
                      <FontAwesomeIcon icon="fa-solid fa-phone" />
                      <a>{téléphone}</a>
                  </div>
                </div>
              </div>
            </div>
            )
          )
        )}
        </div>
      </div>
    </div>
  )
}
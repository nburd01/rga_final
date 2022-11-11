import { collection, onSnapshot} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import LoadingSpinner from "../Loading/Loading";

export const Email = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "contacts");
    onSnapshot(articleRef, (snapshot) => {
      const emails = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEmails(emails);
      console.log("email",emails[0].email);
    });
  }, []);

  return (
    <div className='container Left'>
        <div className="_TitleSubTitle" data-aos="fade-up">
          <h6 className="_BgTitle Left">Email</h6>
          <h3 className="_BgSubTitle Left">Email</h3>
        </div>
        <div className="container Left">
        <div className='Card __primary' data-aos="fade-up">
        {emails.length === 0 ? (
          <>
          <LoadingSpinner/>
          </>
        ) 
        :
        (
          emails.slice(0, 1).map(
            ({
              id,
              email, 
            }) => (
            <div className="quote-wrapper">
              <div className="contactIcon">
                <div key={id}>
                    <div className="quote-wrapper">
                      <FontAwesomeIcon icon="fa-solid fa-envelope" />
                      <a>{email}</a>
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
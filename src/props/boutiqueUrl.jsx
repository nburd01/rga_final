import React from 'react'
import { useState, useEffect } from 'react';
import { collection, doc, getDocs, addDoc, updateDoc } from 'firebase/firestore';
import {db} from '../firebase.js'

export const BoutiqueUrl = () => {

    const [boutiques, setBoutiques] = useState([]);
    const boutiquesCollectionRef = collection(db, "boutiques");
    const [newUrl, setNewUrl] = useState("");

    // useEffect(() => {
    //   const getBoutiques = async () => {
    //     const data = await getDocs(boutiquesCollectionRef);
    //     console.log("data",data)
    //     setBoutiques(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //   }
    //   getBoutiques()
    // }, [])

    // ----------------------------------------------------------------------------------

    // const createUrl = async () => {
    //   await addDoc(boutiquesCollectionRef, {url: newUrl});
    // }

    // const updateUrl = async (id, url) => {
    //   console.log("newUrl",newUrl)
    //   const urlDoc = doc(db, "boutiques", id)
    //   const newFields = {url: "https://www.clickandsport.fr/content/131-roazhon-goal-academy" }
    //   await updateDoc(urlDoc, newFields)
    // };


    // ----------------------------------------------------------------------------------


    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await addDoc(collection(db, 'boutiques'), {
          url: url,
        })
        onClose()
      } catch (err) {
        alert(err)
      }
      console.log("newUrl", newUrl)
      const urlDoc = doc(db, "boutiques", id)
      await updateDoc(urlDoc, newUrl)
    }

    // ----------------------------------------------------------------------------------


  return (
    <div >
      <form onSubmit={handleSubmit} className='addBoutique' name='addBoutique'>
        <input 
          type='text' 
          name='url' 
          onChange={(e) => setUrl(e.target.value.toUpperCase())} 
          value={url}
          placeholder='Enter url'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter boutique decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
{/* READ */}
        {/* <div key={boutiques}>
          <span>URL actuelle :</span>
          {boutiques.map((boutique) => {
            // return (
            //   <div>
            //     <div key={boutique.id}>
            //       <div>{boutique.url}</div>
            //       <button
            //     onClick={() => {
            //       updateUrl(boutique.id, boutique.url);
            //     }}
            //     >submit</button>
            //     </div>

            //     <form className="container" onSubmit={() => handleSubmit(boutique.id, boutique.url)}>
            //     <div>{newUrl} </div> <br />
            //     <br />
            //     <br />
            //       <label>
            //         <input 
            //           type="text" 
            //           value={newUrl}
            //           onChange={(e) => setNewUrl(e.target.value)}
            //         />
            //       </label>
            //       <input type="submit" />
            //     </form>
            //     <div>
            //   </div> 
            // </div> 
            // );
          })}
        </div> */}

{/* CREATE */}
      {/* <div>
        <input 
          placeholder="url..." 
          onChange={(event) => { 
            setNewUrl(event.target.value);
            }}
        />
        <button onClick={createUrl}>Créer URL</button>
        {boutiques.map((boutique) => {
            return (
              <div key={boutique.id}>
                <div>{boutique.url}</div>
              </div>
            );
          })}
      </div> */}

{/* UPDATE */}
      {/* <div>
        <input 
          placeholder="url..." 
          onChange={(event) => { 
            updateUrl(event.target.value);
            }}
        />

        <button
          onClick={() => {
        <button onClick={updateUrl}>Update URL</button>
        }}
        >
        update</button>
          
      </div> */}


   </div>
  );
}

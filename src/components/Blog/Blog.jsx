import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import './Blog.scss'

export default function Blogs() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "blogs");
    // const q = query(articleRef, orderBy("createdAt"));
    onSnapshot(articleRef, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log("articles",articles);
    });
  }, []);


  return (
    <div className="container Right">
      <div className="_TitleSubTitle" data-aos="fade-up">
        <h6 className="_BgTitle Right">Actualités</h6>
        <h3 className="_BgSubTitle Right">Actualités</h3>
      </div>
      <div className="container Right blogs">
      {articles.length === 0 ? (
        <p>No articles found!</p>
      ) 
      :
      (
        articles.map(
          ({
            id,
            blogTitle, 
            blogImg,
            blogDescription
          }) => (
          <div className='Card __primary blog' data-aos="fade-up" key={id}>
            <h3>{blogTitle}</h3>
            <img
              src={blogImg}
              alt="title"
              style={{ height: 180, width: 180 }}
            />
            <p>{blogDescription}</p>
          </div>
          )
        )
      )}
    </div>
    </div>
  );
}

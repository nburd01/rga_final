import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

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
    <div>
      {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
          ({
            id,
            blogTitle, 
            blogImg,
            blogDescription
          }) => (
            <div className="border mt-3 p-3 bg-light" key={id}>
              <div className="row">
                <div className="col-3">
                  <Link to={`/article/${id}`}>
                    <img
                      src={blogImg}
                      alt="title"
                      style={{ height: 180, width: 180 }}
                    />
                  </Link>
                </div>
                <div className="col-9 ps-3">
                  <div className="row">
                    
                   
                  </div>
                  <h3>{blogTitle}</h3>

                  <img src={blogImg}></img>
                  <h5>{blogDescription}</h5>

                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}

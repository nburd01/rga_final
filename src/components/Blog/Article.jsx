import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import './Article.scss'

export default function BlogArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
//   const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "blogs", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);

  
  return (
    <div className="container border bg-light" style={{ marginTop: 70, marginBottom: 70 }}>
      {article && (
        <div className="row">
          <div className="col-3">
            <img
              src={article.blogImg}
              alt={article.blogDescription}
              style={{ width: "100%", padding: 10 }}
            />
          </div>
          <div className="col-9 mt-3">
            <h2>{article.blogTitle}</h2>
            <hr />
            <p>{article.blogBody}</p>
            <a href={article.linkUrl} target="_blank" rel="noreferrer" className="blogButton">accéder à l'article</a>

          </div>
        </div>
      )}
    </div>
  );
}

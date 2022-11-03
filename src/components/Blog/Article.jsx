import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "../../firebase";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

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
    <div className="container border bg-light" style={{ marginTop: 70 }}>
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
            {/* <h5>Author: {article.createdBy}</h5> */}
            {/* <div> Posted on: {article.createdAt.toDate().toDateString()}</div> */}
            <hr />
            <h4>{article.description}</h4>

            {/* <div className="d-flex flex-row-reverse">
              {user && <LikeArticle id={id} likes={article.likes} />}
              <div className="pe-2">
                <p>{article.likes.length}</p>
              </div>
            </div> */}
            {/* comment  */}
            {/* <Comment id={article.id} /> */}
          </div>
        </div>
      )}
    </div>
  );
}

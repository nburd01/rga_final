import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import LoadingSpinner from '../Loading/Loading';
import './AllArticles.module.scss'

export const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const articleRef = collection(db, "blogs");
      // const q = query(articleRef, orderBy("createdAt"));
      onSnapshot(articleRef, (snapshot) => {
        const articles = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articles);
        console.log("articles", articles);
      });
    }, []);

  return  (
  <div className="container Right">
  <div className="_TitleSubTitle" data-aos="fade-up">
    <h6 className="_BgTitle Right">Actualités</h6>
    <h3 className="_BgSubTitle Right">Actualités</h3>
  </div>
  <div className="container Right blogs">
        {articles.length === 0 ? (
            <>
            <LoadingSpinner/>
            {/* <p>Pas d'articles trouvés.</p> */}
            </>
        ) 
        :
        (
            articles.map(
            ({
                id,
                blogTitle, 
                blogImg,
                blogDescription, 
            }) => (
            <div className='Card __primary blog' data-aos="fade-up" key={id}>
                <Link to={`/blog/${id}`}>
                <img
                    src={blogImg}
                    alt="title"
                    style={{ height: 180 }}
                    />
                </Link>
                <h3>{blogTitle.substring(0, 100)}</h3>
                <p>{blogDescription.substring(0, 150)}</p>
                <Link to={`/blog/${id}`} className=""><span>Accéder</span></Link>
            </div>
            )
            )
        )}
  </div>
  </div>
  )
}

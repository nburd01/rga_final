import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import LoadingSpinner from "../Loading/Loading";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import "./slick.scss"; 
import "./slick-theme.scss";
import "../../index.scss";


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SimpleSlider() {
  const [sliderRef, setSliderRef] = useState(null)
  console.log("sliderRef",sliderRef)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  
  };

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
      console.log("articles",articles);
    });
  }, []);

  return (
    <div className="container Right">
      <div className="_TitleSubTitle" data-aos="fade-up">
        <h6 className="_BgTitle Right">Actualités</h6>
        <h3 className="_BgSubTitle Right">Actualités</h3>
      </div>
      <div className="">
      <button onClick={sliderRef?.slickPrev}>
          prev
        </button>
        <button onClick={sliderRef?.slickNext}>
          forward
        </button>
        <Slider ref={setSliderRef} {...sliderSettings}>   
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
                    blogDescription
                }) => (
                <div className='' data-aos="fade-up" key={id}>
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
        </Slider>
      </div>
    </div>
  )
}
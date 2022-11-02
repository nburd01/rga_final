import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Blog.scss'
import {db} from '../../firebase'
import {collection, getDocs} from 'firebase/firestore'

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const blogsCollectionRef = collection(db, "blogs");

    useEffect(() => {
      const getBlogPosts = async () => {
        const data = await  getDocs(blogsCollectionRef);
        setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log("blogs", data)
        // console.  log("blogPost", blogs[0].blogBody)
      } 
      getBlogPosts()
    }, [])

    return (
        <div className="container Right">
        <div className="_TitleSubTitle" data-aos="fade-up">
          <h6 className="_BgTitle Right">Actualités</h6>
          <h3 className="_BgSubTitle Right">Actualités</h3>
          </div>
          <div className="container Right">
            {blogs.map((blog) => { 
              return(
                <div className='Card __primary' data-aos="fade-up">
              <div>
                {" "}
                <h3>{blog.blogTitle}</h3>
                <p>{blog.blogImg}</p>
                <p>{blog.blogDescription}</p>
                <button>Accéder</button>

              </div>
              </div>
              );
              
              }
              )
            }
        </div>
       
      </div>
      )
    }
    
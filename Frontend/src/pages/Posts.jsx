import React, { useState,useEffect } from 'react';
import "/src/App.css";
import axios from "axios"
const Posts = () => {
  const [ posts, setPosts ] = useState([
          {
              _id: "1",
              image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              caption: "Beautiful scenery, This is the default Post which comes always on top.",
          }
      ])
  
      useEffect(() => {
  axios
    .get("http://localhost:3000/posts")
    .then((res) => {
      console.log(res.data);   // 👈 Ye print karo
      setPosts(res.data.post);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

  return (
    <>
    <div className='PostDiv'>
      <span className='PostHeading'>Your all posts</span>
    </div>
    <section className='feed-section' >

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card' >
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No posts available</h1>
                )
            }

        </section>
    </>
  )
}

export default Posts
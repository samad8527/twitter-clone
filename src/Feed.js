import React from 'react'
import {useState,useEffect} from 'react'  
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
import { doc, onSnapshot, collection, query } from "firebase/firestore";
import FlipMove from 'react-flip-move'
function Feed() {
  const [posts,setPosts]= useState([]);
  useEffect(()=>{
    const q = query(collection(db, "posts"))
    const unsub = onSnapshot(q, (querySnapshot) => {
        setPosts(querySnapshot.docs.map((doc) =>doc.data()));
      
    });
    
  },[]);
  return (
      <div className="feed">
            {/* // header */}
            <div className="feed__header">
               <h2>Home</h2>
            </div>
            <TweetBox/>
            <FlipMove>

            {posts.map((post) =>(
              < Post
              key={post.text}
              displayName={post.displayName}
              userName={post.userName}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
              />

            ) )}
            </FlipMove>
           
        </div>
   
      
  )
}

export default Feed
import React,{useState} from 'react'
import './TweetBox.css'
import {Avatar , Button} from '@mui/material';
import db from './firebase';
import { collection,addDoc} from "firebase/firestore";
function TweetBox() {
  const [tweetMessage,setTweetMessage]=useState('');
  const [tweetImage,setTweetImage]=useState('');
  const sendTweet= e=>{
    e.preventDefault();
   addDoc(collection(db,"posts"),  
      {
        displayName:"Uzair Ahmed",
        userName:"uzair123",
        verified:true,
        text:tweetMessage,
        image:tweetImage,
        avatar:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"

      }
    );
    setTweetImage('');
    setTweetMessage('');
  }
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-
            storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            <input type="text" 
            onChange={(e)=>setTweetMessage(e.target.value)}
            value={tweetMessage}
             placeholder="What's happening ?"/>
            </div>
            <input
            value={tweetImage}
            onChange={(e)=>setTweetImage(e.target.value)}
            className='tweetBox__imageInput'
            placeholder='Optional:Enter Image URL'
            type='text'
            />
            <Button onClick={sendTweet}
            type="submit" className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import '../Header/FetchData.css'
import Channelpage from '../channelpage/Channelpage';

const FetchData = () => {
    const [myData, setmyData] = useState([]);


    
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '44a400f97dmsh54e36afd7f6d79ap12c6c4jsn9194e99fb2dd',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const fetch = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data.items);
    setmyData(response.data.items);

  } catch (error) {
    console.error(error);
  }

}

    
useEffect(() => {
    fetch()
    
  },[])

  return (

    <>

    <div className='Map'>
      <div className='MainDiv'>
        <div className='middleDiv grid gap-5 grid-cols-12'>
        {
        myData.slice(0,15).map((element) => (
              <div className='Map'  key={element.id.videoId}>
             <Link to={`news/${element.id.videoId}`}>
             <img className='iframe-img' src={element.snippet.thumbnails.medium.url} alt="video" />
              <p className='MapP'>{element.snippet.channelTitle}</p> 
              <span className='Span'>{element.snippet.title}</span> 
              <span><br /><data>{element.snippet.publishTime}</data></span></Link>
              </div>
              
          
          ))
       }
        </div>
      </div>
      <div className='MainDiv'>
        <div className='middleDiv grid gap-5 grid-cols-12'>
        {
        myData.slice(15,30).map((element) => (
              <div className='ndDiv' key={element.id.videoId}>
                <Link to={`news/${element.id.videoId}`}>
                
              {/* <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframe2'></iframe> */}
              <img src={element.snippet.thumbnails.medium.url} alt="video" />
              <p className='Maap'>{element.snippet.channelTitle}</p>
              <span className='Span2'>{element.snippet.title}</span>
              <span className='Span2'><data>{element.snippet.publishTime}</data></span>
              </Link>
              </div>
              
              
          ))
       }
        </div>
      </div>
      <div className='MainDiv'>
        <div className='middleDiv grid gap-5 grid-cols-12'>
        {
        myData.slice(30,50).map((element) => (
              <div className='ndDiv'  key={element.id.videoId}>
              <Link to={`news/${element.id.videoId}`}>
              <img className='video__img' src={element.snippet.thumbnails.medium.url} alt="video" />
              <p className='Maap'>{element.snippet.channelTitle}</p>
              <span className='Span2'>{element.snippet.title}</span>
              <span className='Span2'><data>{element.snippet.publishTime}</data></span>
              </Link>
              </div>
              
          
          ))
       }
        </div>
      </div>
    </div>
    </>
  )
}

export default FetchData
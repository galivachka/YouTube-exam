import React from 'react'
// import { useState } from 'react'
import Registration from '../Register/Registration.jsx'


import {BsYoutube} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiVidiconLine} from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RxAvatar} from 'react-icons/rx'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineFire} from 'react-icons/ai'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {VscFileSymlinkDirectory} from 'react-icons/vsc'
import {RiFilePaper2Line} from 'react-icons/ri'
import {MdOutlineWatchLater} from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {CgGames} from 'react-icons/cg'
import {AiFillSetting} from 'react-icons/ai'
import {RiLoginBoxLine} from 'react-icons/ri'
import {BsMoon} from 'react-icons/bs'
import person from '../../assets/images/person.jpg'




import "./Channelpage.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../Header/Header.css"
import FetchData from '../Header/FetchData.jsx'
import {Link,useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';
// import {avatar} from '../../../public/images/avatar.svg'

function Header() {
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
        'X-RapidAPI-Key': '157b9ea064msh90184751c932591p1d3703jsn82a88f20db9b',
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
    const [color , setColor] = useState(false);
    const handleChange = ()=>{
    setColor(!color)
    
    } 
    const [displayB , setDisplayB] = useState(false);
    const handleChange2 = ()=>{
    setDisplayB(!displayB)
    } 
    
       const id = useParams();
 
    
    return (
        
        <>
        <div className={color ? 'app-js' : 'white'}>
         <header>
         <div className='NavBar'>
                <nav className='NavBar__nav'>
                <div className='container'>
                     <div className='NavBar__nav__div'>
                     <button onClick={handleChange2} className='change__btn'><RxHamburgerMenu className='hamburger'/></button>
                         
                         <div className='navBar_nav_logo'>
                             <BsYoutube  className='logo'/>
                             <span className='NavBar__nav__logo__span'>YouTube</span>
                         </div>
                         <form method='POST' className='NavBar__nav__div__form'>
                             <div className='NavBar__nav__div__form__inp'>
                                 <input type='text' placeholder='Search' className='search'/>
                                 <AiOutlineSearch className='inpSerchImg'/>
                             </div>
                         </form>
                         <div className='NavBar_nav__companents'>
                             <RiVidiconLine className='vidio'/>
                             <TbGridDots className='dots'/>
                             <IoMdNotificationsOutline className='notification'/>
                             <RxAvatar className='person'/>
                         </div>
                     </div>

                </div>     
                </nav>
                <button onClick={handleChange} className='change_btn'><BsMoon/></button>
               
            </div>
            <div className='hero'>
            <div className={displayB ? 'dislayNone ' : 'dislayBlock'}>
            <div className='container'>
                <div className='sidebar'>
                     <div>
                         <div className='home'>   
                             <Link to="/" className='home__link'><AiOutlineHome className='home__img'/> Home</Link>
                         </div>
                         <div className='trending'>
                             <Link to="/Trending" className='Trending__link'><AiOutlineFire className='Trending__img'/>Trending</Link>
                         </div>
                         <div className='Registrations'>
                             <Link to="/Registration" className='Registration__link'><RiLoginBoxLine className='Registration__img'/>Registration</Link>
                         </div>
                     </div>
                     <div>
                         <div className='Library'>
                             <Link to="/Library" className='Library__link'><VscFileSymlinkDirectory className='Library__img'/>Library</Link>
                         </div>
                         <div className='History'>
                             <Link to="/History" className='History__link'><RiFilePaper2Line className='History__img'/>History</Link>
                         </div>
                         <div className='Watch'>
                             <Link to="/Watch" className='Watch__link'><MdOutlineWatchLater className='Watch__img'/>Watch</Link>
                         </div>
                         <div className='Favourites'>
                             <Link to="/Favourites" className='Favourites__link'><AiOutlineStar className='Favourites__img'/>Favourites</Link>
                         </div>
                         <div className='Like'>
                             <Link to="/Like" className='Like__link'><AiOutlineHeart className='Like__img'/>Liked videos</Link>
                         </div>
                         <div className='Music'>
                             <Link to="/Music" className='Music__link'><BsMusicNoteBeamed className='Music__img'/>Music</Link>
                         </div>
                         <div className='Games'>
                             <Link to="/Games" className='Games__link'><CgGames className='Games__img'/>Games</Link>
                         </div>
                         
<div className="dropdown">



    <DropdownButton id="dropdown-item-button" title="Subscription">
      <Dropdown.Item as="button"><img className='ava1' src={person} alt="ava" /></Dropdown.Item>
      <Dropdown.Item as="button"><img className='ava1' src={person} alt="ava" /> </Dropdown.Item>
      <Dropdown.Item as="button"><img className='ava1' src={person} alt="ava" /></Dropdown.Item>
    </DropdownButton>


</div>

                     </div>
                </div>
                

                <div className='sidebar__b'>
                     <div className='sidebar__bottom'>
                             <div className='home col-3'>   
                                 <Link to="/" className='home__link'><AiOutlineHome className='home__img'/></Link>
                             </div>
                             <div className='trending col-3'>
                                 <Link to="/Trending" className='Trending__link'><AiOutlineFire className='Trending__img'/></Link>
                             </div>
                             <div className='Registration col-3'>
                                 <Link to="/Registration" className='Registration__link'><MdOutlineSubscriptions className='Registration__img'/></Link>
                             </div>
                             <div className='Library col-3'>
                                <Link to="/Library" className='Library__link'><VscFileSymlinkDirectory className='Library__img'/></Link>
                             </div>
                             <div className='History col-3'>
                                <Link to="/History" className='History__link'><RiFilePaper2Line className='History__img'/></Link>
                             </div>
                             <div className='Watch col-3'>
                                <Link to="/Watch" className='Watch__link'><MdOutlineWatchLater className='Watch__img'/></Link>
                             </div>
                             <div className='Favourites col-3'>
                                <Link to="/Favourites" className='Favourites__link'><AiOutlineStar className='Favourites__img'/></Link>
                             </div>
                             <div className='Like col-3'>
                                <Link to="/Like" className='Like__link'><AiOutlineHeart className='Like__img'/></Link>
                             </div>
                             <div className='Music col-3'>
                                <Link to="/Music" className='Music__link'><BsMusicNoteBeamed className='Music__img'/></Link>
                             </div>
                             <div className='Games col-3'>
                                <Link to="/Games" className='Games__link'><CgGames className='Games__img'/></Link>
                                
                             </div>
                            

  


                        </div>
                 </div>
                 </div>
                  </div>
                  
                  <div className="iframe-all">
                    
                  <div className="iframeDiv">
                  <iframe width={"900px"} height={"600px"} className="Single-iframe" src={`https://www.youtube.com/embed/${id.id} `} >
                 </iframe>
                 
                 <div className="iframe-texts">
             
                   
                 </div>
                  </div>
                  <div className="right-sidebar">
                  {
        myData.slice(0,15).map((element) => (
              <div className='Map'  key={element.id.videoId}>
             <Link to={`news/${element.id.videoId}`}>

             <img src={element.snippet.thumbnails.medium.url} alt="video" />
              <p className='MapP'>{element.snippet.channelTitle}</p>
              <span className='Span'>{element.snippet.title}</span>
              <span>publishTime<data>{element.snippet.publishTime}</data></span></Link>
              </div>
              
          
          ))
       }
                  </div>
                  </div>
                
                
                </div>
          
        </header> 
       {/* <div className="settings">
            <div className='Setting'>
             <Link to="/Setting" className='Setting__link'><AiFillSetting className='Setting__img'/>Setting</Link>
             </div>
       </div> */}

        </div>
        </>
      )
}

export default Header
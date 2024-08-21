import React from 'react'
import video from '../assets/cbe050e4314fa46770a73a95eab768c3.mp4'
import { Card, CardActionArea, Container } from '@mui/material';
import PrayerTime from './PrayerTime.jsx';
export default function Vide() {
  return (
    <>
           <div className='vid'>
            
      <video src={video} loop muted autoPlay />
      <div className='overlay'></div>

      <div  className='content' >
  <Container maxWidth="xl"> 

    <PrayerTime/>


  </Container>
   
</div>
      </div> 



   
    

    
    </>


  )
}

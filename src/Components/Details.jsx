import React from 'react'
import YouTube from 'react-youtube';
import './Details.css'

const Details = (props) => {

    const opts = {
        height: '390',
        width: '640',
      };

  return (
    <div className='details'>
        <h1 className='details-title'>{props.title}</h1>
        <img  className='details-picture' src={props.src} alt='movie picture/poster'/>
        <div className='details-trailer'>
            <YouTube videoId={props.videoId} opts={opts}/>
        </div>
        <p className='details-summary'>Detailed Description: {props.summary}</p>
        <p className='details-revenue'> Box Office Revenue: {props.revenue}</p>
        <p className='details-year'>Debut: {props.year}</p>
    </div>
  )
}

export default Details
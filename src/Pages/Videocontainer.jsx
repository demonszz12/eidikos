import React from 'react'
import { useSelector } from 'react-redux';
import "./Videocontainer.css"

const Videocontainer = () => {
    const result = useSelector((store)=>store.videos);
    console.log(result)    
  return (
    <div className='videoContent'>
        {
            result.map((item)=>(
                <div className='eachone' id={item.id.videoId}>
                    <div className='frame'><iframe  width={"100%"} src={`https://www.youtube.com/embed/${item.id.videoId}`} frameBorder="0" allowFullScreen></iframe></div>
                    <p style={{width:"100%", color:"white",overflow:"hidden",textAlign:"left"}}><b>{item.snippet.title}</b></p>
                </div>
            ))
        }
    </div>
  )
}

export default Videocontainer
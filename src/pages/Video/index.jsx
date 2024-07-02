import React from 'react'
import videoq from "../../assets/background-GilwkM_t.mp4";


function Video() {
  return (
    <>
     <div className="_hero_o3c3r_1">
        <video autoPlay loop muted>
          <source src={videoq} type="video/mp4" />
        </video>
        <div className="_content_o3c3r_21">
          <h2>Comprehensive Cybersecurity Solutions for</h2>
          <h1>Compliance &amp; Protection</h1>
        </div>
      </div>
    
    </>
  )
}

export default Video
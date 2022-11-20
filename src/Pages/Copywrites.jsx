import React from 'react'
import copy from "../assert/copy.png"
import "./Copywrites.css"

const Copywrights = () => {
  return (
    <div className='copy'>
      <img src={copy} alt="" />
      <p style={{padding:"0px",margin:"0px"}}><b>2022  Ramachandran.S (CSE) IFET College of Engineering 2nd Year Mini Project</b></p>
    </div>
  )
}

export default Copywrights
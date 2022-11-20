import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
import axios from "axios"

const Signup = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState(" ");
    const [category,setCategory] = useState(" ");
    const handlenav=()=>{
        navigate("/login")
    }
    const handlesubmit =()=>{
        const payload = {username,password,category};
        console.log(payload);
        axios({
            method: 'post',
            url: 'https://eidikosbe.onrender.com/signup',
            data: payload
          })
          .then(r=>{
            let msg = r.data.msg;
            if(msg === "Sign up Successfull"){
                alert(msg)
                navigate("/login")
            }
            else{
                alert("Signup again")
            }
          })
          .catch(e=>console.log(e))
    }

  return (
    <div className='container'>
        
        <div className="centered-element">
        <h1>SIGNUP</h1>
            <div className="name">
                <label className='label' htmlFor="">Username :</label>
                <input className='inp' onChange={(e)=>setUsername(e.target.value)} type="text"  />
            </div>
            <div className="password">
                <label className='label' htmlFor="">Password :</label>
                <input className='inp' onChange={(e)=>setPassword(e.target.value)} type="password"  />
            </div>
            <div className="category">
                <label className='label' htmlFor="">Category :</label>
                <input className='inp' onChange={(e)=>setCategory(e.target.value)} type="text" placeholder='At homepage' />
            </div>
            <button className='btn' onClick={handlesubmit}>Signup</button>
            <div className="log">
                <p>Already a user? </p><p onClick={handlenav}>Login</p>
            </div>
        </div>
    </div>
  )
}

export default Signup
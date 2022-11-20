import React from 'react'
import { useState,useEffect } from 'react'
import "./Signup.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { updatevideo,updatesearch } from '../Redux/action';


const Login = () => {

  const getSearch=(y)=>{
    dispatch(updatesearch(y));
  }

  
  const savevideos=(x)=>{
    dispatch(updatevideo(x));
  }

  const navigate =useNavigate()
  const dispatch = useDispatch();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const handleLogin=()=>{
    const payload = {username,password}
    console.log(payload);
    axios({
      method: 'post',
      url: 'http://localhost:4000/login',
      data: payload
    })
    .then(r=>{
      console.log(r)
      let msg = r.data.msg;
      if(r.data.msg === "login successfull")
      {
        alert(msg);
        localStorage.setItem("default",JSON.stringify(r.data.category))
        const search = JSON.parse(localStorage.getItem("default"))
        getSearch(search)
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAiYrMi2suiglPfmA8F2t-O0oZ2E9-b_y4&type=video&part=snippet&maxResults=20&q=${search}`)
        .then((r)=>{
          console.log(r.data.items)
          savevideos(r.data.items)})
        .catch((e)=>console.log(e));
            navigate("/")
          }
      else{
        alert(r.data.msg)
      }
    })
    .catch(e=>console.log(e))
  }
  return (
    <div className='container'>
        
    <div className="centered-element">
    <h1>LOGIN</h1>
        <div className="name">
            <label className='label' htmlFor="">Username :</label>
            <input className='inp' onChange={(e)=>setUsername(e.target.value)} type="text"  />
        </div>
        <div className="password">
            <label className='label' htmlFor="">Password :</label>
            <input className='inp' onChange={(e)=>setPassword(e.target.value)} type="password"  />
        </div>
        <button className='btn' onClick={handleLogin}>Login</button>
    </div>
</div>
  )
}

export default Login
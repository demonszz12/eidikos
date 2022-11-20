import react from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import "./Sidebar.css"

const Sidebar=()=>{
    // const name = JSON.parse(localStorage.getItem("user")) || "Not Applicable"
    let logo;
    let name;
    const userlogo = ()=>{
        if(JSON.parse(localStorage.getItem("user"))){
            // setName( JSON.parse(localStorage.getItem("user")));
            return JSON.parse(localStorage.getItem("user"))[0].toUpperCase();
        }
        else{
            // setName("Not Valid")
            return "#"
        }
    }
    const username = ()=>{
        if(JSON.parse(localStorage.getItem("user"))){
            // setName( JSON.parse(localStorage.getItem("user")));
            return JSON.parse(localStorage.getItem("user"));
        }
        else{
            // setName("Not Valid")
            return "Req.Auth"
        }
    }
    const naviagate=useNavigate();
    const handleauth=()=>{
        naviagate("/signup")
    }
    return (
        <div className="sidebar">
            <div className="auth">
                <button className="authbtn" onClick={handleauth}>Login?Signup</button>
            </div>
            <div className="user">
                <h1>{logo = userlogo()}</h1>
            </div>
            <p className="uname">{name = username()}</p>
        </div>
    )
}

export default Sidebar;
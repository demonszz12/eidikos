import React from 'react';
import "./Dashboard.css"
import youtube from "../assert/youtube.png"
import { getSearchRequest,getSearchSuccess,getSearchFailure,getVideoRequest,getVideoSuccess,getVideoFailure } from '../Redux/action';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import axios from "axios"

const Dashboard = () => {
  const search = useSelector((store)=>store.search)
  const dispatch = useDispatch();
  const [text,setText] = useState("");

  const getSearch=()=>{
    dispatch(getSearchRequest());
    dispatch(getSearchSuccess(text));
    dispatch(getSearchFailure());
  }

  const savevideos=(x)=>{
    dispatch(getVideoRequest());
    dispatch(getVideoSuccess(x));
    dispatch(getVideoFailure());
  }

  const [videos,setVideos] = useState([]);
  const getvideos=()=>{
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAiYrMi2suiglPfmA8F2t-O0oZ2E9-b_y4&type=video&part=snippet&maxResults=20&q=${search}`)
    .then((r)=>{
      console.log(r.data.items)
      savevideos(r.data.items)})
    .catch((e)=>console.log(e));
  }

  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      getSearch();
      setText("");
    }
  };

  useEffect(()=>{
    getvideos()
  },[search])
  return (
    <div>
        <div className='father'>

            <div className='Appname'><img src={youtube} width="60px" alt="" /><h1>EIDIKOS</h1></div>

            <div className='searchbar'>

                <input className='inputtag' type="text" placeholder='search here' value={text} onKeyPress={(e)=>keyDownHandler(e)} onChange={(e)=>setText(e.target.value)} />
                <input className='submit' type="submit" value={"SEARCH"} onClick={()=>{
                    getSearch();
                    setText("")
                    }} />

            </div>
        </div>
    </div>    
  )
}

export default Dashboard
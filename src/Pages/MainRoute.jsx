import React from 'react';
import Dashboard from './Dashboard';
import Copywrights from './Copywrites';
import "./MainRoute.css";
import Videocontainer from './Videocontainer';
import Sidebar from "../Components/Sidebar";

const MainRoute = () => {
  return (
    <div>
        <Dashboard/>
        <div className='Content'>
            <Sidebar/>
            <div className='Container'>
              <Videocontainer />
            </div>
        </div>
        <Copywrights />
    </div>
  )
}

export default MainRoute
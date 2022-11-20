import react from "react";
import {Route,Routes,useNavigate} from "react-router-dom"
import MainRoute from "../Pages/MainRoute";
import Login from "./Login";
import Signup from "./Signup";

const RouteMain=()=>{
    return (
        <Routes>
            <Route path="/"  element={<MainRoute/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login"  element={<Login/>} />
        </Routes>
    )
}

export default RouteMain
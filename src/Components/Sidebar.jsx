import react from "react";
import {useNavigate} from "react-router-dom"

const Sidebar=()=>{
    const naviagate=useNavigate();
    const handleauth=()=>{
        naviagate("/signup")
    }
    return (
        <div className="sidebar">
            <div className="auth">
                <button onClick={handleauth}>Login?Signup</button>
            </div>
        </div>
    )
}

export default Sidebar;
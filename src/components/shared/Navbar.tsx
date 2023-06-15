import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/navbar.css"
import { logoutUser } from '../../services/apiServices/authApi';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const sessionStr = localStorage.getItem("sessionStr");
  const isLoggedIn = sessionStr !== null;

const onLogoutClick = async()=>{
  const response = await logoutUser()
  if (response){
    window.alert("Uspešne odhlaseny")
    navigate("/home")
  }
}

  
  return (
    <nav>
      <Link to="/" className='link'>Home</Link>

      {isLoggedIn ? (
        <div>
        <Link to="/profile/" className='link'>Profile</Link>
        <button onClick={()=>onLogoutClick()}>Logout</button>
        </div>
      ) : (
        <Link to="/login/" className='link'>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;

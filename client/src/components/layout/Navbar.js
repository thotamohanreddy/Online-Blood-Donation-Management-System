import React, { useEffect, useState } from "react";
import bdrop from "../../assets/img/bdrop.png";
import SearchPage from "./SearchPage";

import "../../assets/css/Navbar.css";

const Navbar = () => {
  const [user_id, setUser_id] = useState(localStorage.getItem('user_id'));
  const [emp_id, setemp_id] = useState(localStorage.getItem('emp_id'));
  const logout = () => {
    localStorage.setItem('user_id', '');
    localStorage.setItem('emp_id','');
    window.location = "/home";
  }
  useEffect(()=> {
    console.log(user_id, emp_id);
  }, )
  return (
    <nav className="nav">
      <a href="/home" onClick={logout}>
        <img src={bdrop} alt="bdroplogo" />
      </a>
      <a href={(user_id === '' && emp_id === '') ? "/donate" : ""}>DONATE/REQUEST</a>
      {/* <Search /> */}
      <SearchPage />
      {/* {(user_id === null && emp_id === null) ? <></> : <span style={{marginLeft: '65rem', color: 'white', textDecoration: 'underline'}} onClick={logout}>LOGOUT</span>}  */}
      {(user_id !== '' || emp_id !== '') && <span style={{marginLeft: '65rem', color: 'white', textDecoration: 'underline'}} onClick={logout}>LOGOUT</span>}
    </nav>
  );
};

export default Navbar;

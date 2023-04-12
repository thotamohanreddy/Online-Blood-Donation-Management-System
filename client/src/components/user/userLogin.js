import React, { useState } from "react";
import Axios from "axios";

//css
import "../../assets/css/UserLogin.css";

const UserLogin = () => {
  const [userUserName, setuserUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const userLoginCheck = () => {
    Axios.post("http://localhost:3001/login/usr", {
      userUserName: userUserName,
      userPassword: userPassword,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        localStorage.setItem('user_id', response.data[0].user_id)
        window.location = "/login/usr/dash";
      }
    });
  };

  return (
    <div className="user-login">
      <h2>USER LOGIN</h2>
      <div>
        <input
          name="username"
          type="text "
          placeholder="username"
          onChange={(e) => {
            setuserUserName(e.target.value);
          }}
          required
        />
        <input
          name="password"
          type="text "
          placeholder="password"
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
          required
        />
        <button onClick={userLoginCheck}>Submit</button>
      </div>
    </div>
  );
};

export default UserLogin;

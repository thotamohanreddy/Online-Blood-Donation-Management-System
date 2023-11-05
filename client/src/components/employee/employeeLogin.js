import React, { useState } from "react";
import Axios from "axios";
//css
import "../../assets/css/EmployeeLogin.css";

const EmployeeLogin = () => {
  const [empUserName, setempUsername] = useState("");
  const [empPassword, setempPassword] = useState("");

  //onclick function
  const empLoginCheck = () => {
    Axios.post("http://localhost:3001/login/emp", {
      empUserName: empUserName,
      empPassword: empPassword,
    }).then((response) => {
      // console.log(response);
      if (response.data.message) {
        alert(response.data.message);
      } else {
        // console.log(response.data);
        localStorage.setItem('emp_id', response.data[0].emp_id);
        window.location = "/login/emp/dash";
        alert("WELCOME!");
      }
    });
  };

  return (
    <div className="emp-login">
      <h2>EMPLOYEE LOGIN</h2>
      <div className="emp-form-new">
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={(e) => {
            setempUsername(e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setempPassword(e.target.value);
          }}
        />
        <button onClick={empLoginCheck}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default EmployeeLogin;

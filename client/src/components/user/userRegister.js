import React, { useState } from "react";
import Axios from "axios";

//css
import "../../assets/css/UserRegister.css";

const UserRegister = () => {
  const [userUserName, setuserUsername] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userFName, setuserFName] = useState("");
  const [userMail, setuserMail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userPlace, setuserPlace] = useState("");
  const [userAge, setuserAge] = useState("");
  const [userGender, setuserGender] = useState("");
  const [userBloodGroup, setuserBloodGroup] = useState("");
  const [message, setMessage] = useState("");


  const submituserRegister = () => {
    if (userPassword === confirmPassword) {
      const regurl = "http://localhost:3001/reg/usr";
      Axios.post(regurl, {
        userFName: userFName,
        userAge: userAge,
        userGender: userGender,
        userBloodGroup: userBloodGroup,
        userPhone: userPhone,
        userMail: userMail,
        userPlace: userPlace,
        userUserName: userUserName,
        userPassword: userPassword,
      }).then((response) => {
        if (response.status === 200) {
          setuserFName("");
          setuserAge("");
          setuserGender("");
          setuserBloodGroup("");
          setuserPhone("");
          setuserMail("");
          setuserUsername("");
          setuserPassword("");
          setConfirmPassword("");
          setMessage(response.data.message);
          alert("Registration Successful");
          window.location = "/login/usr";
        } else {
          setMessage(response.data.message);
        }
      }).catch((error) => {
        setMessage(error.message);
      })
    } else {
      alert("Passwords did not match");
    }
  }

  return (
    <div className="user-register">
      <h2>DONAR REGISTER</h2>
      <form className="userReg-form" onSubmit={(e) => { e.preventDefault(); }}>
        <input
          name="userFName"
          type="text "
          placeholder="Full Name"
          onChange={(e) => {
            setuserFName(e.target.value);
          }}
          required
        />
        <input
          name="userAge"
          type="text "
          placeholder="Age"
          onChange={(e) => {
            setuserAge(e.target.value);
          }}
          required
        />
        <input
          name="userGender"
          type="text "
          placeholder="Gender(M/F)"
          onChange={(e) => {
            setuserGender(e.target.value);
          }}
          required
        />
        <input
          name="userBloodGroup"
          type="text "
          placeholder="Blood Group"
          onChange={(e) => {
            setuserBloodGroup(e.target.value);
          }}
          required
        />
        <input
          name="emailId"
          type="text"
          placeholder="Email Place"
          onChange={(e) => {
            setuserMail(e.target.value);
          }}
          required
        />
        <input
          name="userPhone"
          type="number"
          placeholder="Phone Number"
          onChange={(e) => {
            setuserPhone(e.target.value);
          }}
          required
        />
        <input
          name="userPlace"
          type="text"
          placeholder="Place"
          onChange={(e) => {
            setuserPlace(e.target.value);
          }}
          required
        />
        <input
          name="username"
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setuserUsername(e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button onClick={submituserRegister}>REGISTER</button>
        {message && <p>{message}</p> }
      </form>
    </div>
  );
};

export default UserRegister;

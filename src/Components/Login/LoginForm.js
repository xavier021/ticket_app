import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import InputUI from "../UI/Input";
import axios from "axios";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:5001/api/users/login",
        {
          email: username,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        navigate("/Dashboard");
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 404) {
          console.log("Wrong Email or Password.");
        }
      });
  };

  return (
    <div className="login-page">
      {/* <h1>x-tickets</h1> */}
      <div className="container">
        <form className="login-form">
          <h2>Welcome</h2>
          <label>
            <b>Email Address</b>
          </label>
          <InputUI
            type="text"
            placeholder="Enter Email"
            value={username}
            className="username-input"
            handleChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <label>
            <b>Password</b>
          </label>
          <InputUI
            type="password"
            placeholder="Enter Password"
            value={password}
            className="pass-input"
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="login-button" onClick={handleSubmit}>
            Login
          </button>
          {/* <button className="register-button">Register</button> */}
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './login.css';
import Navi from './Navi.js'
function Login() {
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data === "User exists") {
        navigate("/");
      } else if (response.data === "User not found") {
        alert("Please Signup first!");
        navigate("/signup"); 
      } else if (response.data === "Invalid credentials") {
        alert("Incorrect password.");
        setPassword("");
      }
    } catch (e) {
      alert("Wrong details");
      console.log(e);
    }
  }

  return (
    <>
    <Navi />
    <div className="container-grey">
        <div className="form-container">
            <div className="h1Box">
                <h1>Login</h1>
                <div className="line"></div>
            </div>
      <form>
        <div className="loginBox">
            <div className="entryBox">
        <input
          className="email input"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        </div>
        <div className="entryBox">
        <input
          className="password input"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        </div>
        <button className="loginBtn  form-button" type="submit" onClick={submit}>
                        Login
                    </button>
        <Link to="/signup" className="otherbtns">Sign Up</Link>
      </div>
      </form>
      </div>
    </div>
    </>
  );
}

export default Login;

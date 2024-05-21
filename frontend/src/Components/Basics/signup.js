import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });

      if (response.data === "User already exists") {
        alert("User already exists. Please login!");
        navigate("/login"); 
      } else if (response.data === "Signup successful") {
        alert("signup successful!");
        navigate("/login");     
        // should make the session from here only, will try to navigate to home page directly
        // after successful sign up
      }
    } catch (e) {
      alert("Wrong details");
      console.log(e);
    }
  }


  return (
    <div className="container-grey">
      <div className="form-container">
        <div className="h1Box">
          <h1>Signup</h1>
          <div className="line"></div>
        </div>
        <form action="POST">
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

            <button
              className="loginBtn form-button"
              type="submit"
              onClick={submit}
            >
              Sign Up
            </button>
          </div>
        </form>
        <Link to="/" className="Sign-btn">
          Already a Member
        </Link>
      </div>
    </div>
  );
}

export default Signup;

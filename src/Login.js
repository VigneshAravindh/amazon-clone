import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try{
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      console.log("already User registered:", userCredential.user);
      navigate("/")
    }
    catch(error){
      alert("passWord invalid:", error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email,password);
      console.log("User registered:", userCredential.user);
      navigate("/")
    } catch (error) {
      alert("Error registering user:", error.message);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="images/logo_2.webp"
        />
      </Link>

      <div className="login__container">
        <form>
          <h1>Sign-in</h1>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="button"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>
        <p>terms and service applied</p>
        <button
          className="login__registerButton"
          type="button"
          onClick={register}
        >
          Create your Ecom account
        </button>
      </div>
    </div>
  );
}

export default Login;

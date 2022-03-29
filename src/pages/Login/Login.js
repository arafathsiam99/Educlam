import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase/useFirebase.js";
import img from "../../Images/login.jpg";
import "./Login.css";

const Login = () => {
//   login function from firebase
  const { login, error, user, googleSignIn, setUser } = useFirebase();

  const history = useHistory();
  const location = useLocation();
    const redirect_uri = location.state?.from || "/home";
  const auth = getAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Google sign In
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // setUser(result.user);
      history.push(redirect_uri);
    });
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    emailRef.current.value = "";
    const password = passwordRef.current.value;
    passwordRef.current.value = "";
    const newData = { email, password };
    login(newData.email, newData.password, history, location);
  };
  return (
    <div>
      <div className="container ">
        <div className="row login_style">
          <div className="col-md-6">
            <img className="w-100" src={img} alt="#" />
          </div>
          <div className="col-md-6">
            <form action="" onSubmit={handleLogin}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  ref={emailRef}
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="mt-5 text-center">
                {/* {error && <p className="text-danger">{error}</p>} */}
                <button className="btn btn-primary w-100" type="submit">
                  Login
                </button>
                <p>
                  Have You Registerd?<Link to="register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section className="mt-5">
        <div>
          <div className="login-box d-flex align-items-center justify-content-center">
            <div className="login">
              <div className="login-box">
                <h2 className="custom-font">Please Login here with google</h2>
                <Button
                  onClick={handleGoogleSignIn}
                  className="custom-btn w-80"
                >
                  Google Sign In
                </Button>
                <Link to="/register"> </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

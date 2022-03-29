import React, { useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase/useFirebase";
import img from "../../Images/registration.svg";
const Register = () => {
  // get form data
  const { setUser, setName, updateName, registration } = useFirebase();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const userTypeRef = useRef();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/home";

  // handle registration
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(userName,email,password);
    // const name = nameRef.current.value;
    // nameRef.current.value = "";
    // const email = emailRef.current.value;
    // emailRef.current.value = "";
    // const password = passwordRef.current.value;
    // passwordRef.current.value = "";

    // const userType = userTypeRef.current.value;
    // userTypeRef.current.value = "";

    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("password", password);
    // formData.append("userType", userType);

    // const newData = { name, email, password };
    // console.log(newData);

    registration(userName, email, password, history);
  };

  return (
    <div>
      <div className="container">
        <div className="row login_style">
          <div className="col-md-6">
            <img className="w-100" src={img} alt="" />
          </div>
          <div className="col-md-6">
            <form action="" onSubmit={handleRegistration}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  onBlur={(e) => {
                    setUserName(e.target.value);
                  }}
                  required
                />
                <label>Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  onBlur={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <label>Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onBlur={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <label>Password</label>
              </div>
              <div className="mt-5 text-center">
                <button className="btn btn-primary w-100">Submit</button>
                <p>
                  Have You Already Registered?<Link to="login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
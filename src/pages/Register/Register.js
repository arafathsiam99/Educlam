import { getAuth } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useFirebase/useAuth";
// import useFirebase from "../../Hooks/useFirebase";
import img from "../../Images/registration.svg";
const Register = () => {
  // register function from firebase
//   const { registration } = useFirebase();
  // get form data
  const { setUser, setName, updateName } = useAuth();
    const auth = getAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [image, setImage] = useState(null);
  const userTypeRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/home";

  // handle registration
  const handleRegistration = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    nameRef.current.value = "";
    const email = emailRef.current.value;
    emailRef.current.value = "";
    const password = passwordRef.current.value;
    passwordRef.current.value = "";

    const userType = userTypeRef.current.value;
    userTypeRef.current.value = "";

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);
    formData.append("userType", userType);

    const newData = { name, email, password };
    console.log(newData);

    // registration(newData.name, newData.email, newData.password);
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
                  className="form-control"
                  placeholder="Full Name"
                  ref={nameRef}
                  required
                />
                <label>Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  ref={emailRef}
                  required
                />
                <label>Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
                <label>Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  placeholder="image"
                  accept="image/*"
                  required
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              {/* <div className="form-floating mb-3">
                <select
                  name=""
                  id=""
                  className="form-control"
                  required
                  ref={userTypeRef}
                >
                  <option value="" disabled>
                    Select User Type
                  </option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div> */}
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
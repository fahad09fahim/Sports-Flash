import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Signup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    navigate("/home");
    console.log(user);
  };
  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Sign Up</h2>
        <div className="form-group mb-2">
          <input
            ref={emailRef}
            type="text"
            className="form-control"
            placeholder="Name"
            required="required"
          />
        </div>
        <div className="form-group mb-2">
          <input
            ref={emailRef}
            type="text"
            className="form-control"
            placeholder="Email"
            required="required"
          />
        </div>
        <div className="form-group mb-2">
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            placeholder="Password"
            required="required"
          />
        </div>
        <label className="mb-2">
          <input type="checkbox" /> I accept terms and condition
        </label>
        <div className="form-group mb-2 text-center ">
          <button type="submit" className="btn btn-dark btn-block w-75">
            Sign UP
          </button>
        </div>
      </form>
      <p className="text-center">
        Already have an Account?
        <Link to="/login" className="text-info" onClick={navigateLogin}>
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;

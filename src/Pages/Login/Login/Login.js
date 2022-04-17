import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./Login.css";
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Log in</h2>
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
            Log in
          </button>
        </div>
        <div>
          <a href="#">Forgot Password?</a>
        </div>
      </form>
      <p className="text-center">
        New on Sports Flash?
        <Link
          to="/signup"
          onClick={navigateSignup}
          className="text-info"
          href="#"
        >
          Create an Account
        </Link>
      </p>
      {errorElement}
    </div>
  );
};

export default Login;

import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (hookError) {
    errorElement = <p className="text-warning">{hookError?.message}</p>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };

  const navigateSignup = () => {
    navigate("/signup");
  };
  // handle reset password
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("✉ Send Reset Email");
    } else {
      toast.warn("please Enter your email address!");
    }
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

        <div className="form-group mb-2 text-center ">
          <button type="submit" className="btn btn-dark btn-block w-75">
            Log in
          </button>
        </div>
        <div>
          <button
            className="btn btn-link text-info text-decoration-none"
            onClick={resetPassword}
          >
            Forgot Password?
          </button>
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
      <SocialLogin></SocialLogin>
      {errorElement}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;

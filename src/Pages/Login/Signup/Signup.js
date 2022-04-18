import React, { useRef, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  let errorElement;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate("/home");
  }
  if (error) {
    errorElement = <p className="text-warning"> {error?.message}</p>;
  }
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
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={`mb-2 ps-3 ${agree ? "" : "text-danger"} `}
          htmlFor="terms"
        >
          I accept terms and condition
        </label>
        <div className="form-group mb-2 text-center ">
          <button
            disabled={!agree}
            type="submit"
            className="btn btn-dark btn-block w-75"
          >
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
      <SocialLogin></SocialLogin>
      {errorElement}
    </div>
  );
};

export default Signup;

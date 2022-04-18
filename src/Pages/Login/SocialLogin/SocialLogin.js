import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let handleError;
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate("/home");
  }
  if (error) {
    handleError = <p className="text-warning"> {error?.message}</p>;
  }
  return (
    <div>
      <hr />
      <Button
        onClick={() => signInWithGoogle()}
        className="w-100"
        variant="outline-secondary"
      >
        <FaGoogle className="me-2 mb-1" />
        Log In With Google
      </Button>
      <br />
      {handleError}
    </div>
  );
};

export default SocialLogin;

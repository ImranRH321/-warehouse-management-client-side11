import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  /* ..Google */
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  /* ... */
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  let setError;
  if (error || error1) {
    setError = (
      <p className="text-danger mt-2  ms-5 ps-3">error: {error?.message}</p>
    );
  }
  if (user || user1) {
    navigate(from, { replace: true });
  }
  if (loading || loading1) {
    return <Loading></Loading>;
  }

  const handleExistsUserFormLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
    event.target.reset();
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="w-75 mx-auto mb-4 mt-5">Login page </h2>
      <form onSubmit={handleExistsUserFormLogin}>
        <input
          className="form-control w-75 mx-auto"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          autoComplete="off"
        />
        <input
          className="form-control w-75 mx-auto mt-4"
          type="password"
          name="password"
          placeholder="Your Password"
          required
          autoComplete="off"
        />
        {setError}
        <input
          className="form-control w-25 text-white bg-primary mx-auto mt-4 mx-5 ps-3"
          type="submit"
          value="Login"
        />
        <p className="w-75 mx-auto mt-3">
          New user please ? <Link to="/register">Register</Link>
        </p>
      </form>

      <div className="text-center">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-dark text-white px-4 py-1 rounded"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;

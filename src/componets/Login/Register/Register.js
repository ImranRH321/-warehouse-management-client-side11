import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  //  update name
  const [updateProfile, updating, error2] = useUpdateProfile(auth);
  /* ... */
  let navigate = useNavigate();

  if (user || user1) {
    navigate("/home");
  }

  let setError;
  if (error || error1 || error2) {
    setError = (
      <h6 className="text-danger mt-2  ms-5 ps-3">
        Error: {error?.message}
        {error1?.message} {error2?.message}
      </h6>
    );
  }

  if (loading || loading1) {
    return <Loading></Loading>;
  }
  console.log(user1);
  const handleRegisterUser = async event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password.length > 5) {
      if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
        alert(" password At least one special character");
        return;
      }
      if (password === confirmPassword) {
        // console.log(email, password, confirmPassword);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        event.target.reset();
      } else {
        alert("password and confirm password is not match ");
      }
    } else {
      alert("minimum 6 characters");
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="w-75 mx-auto mb-4 mt-5">Register page </h2>
      <form onSubmit={handleRegisterUser}>
        <input
          className="form-control w-75 mx-auto my-3"
          type="text"
          name="name"
          placeholder="Your Name"
           required
        />
        <input
          className="form-control w-75 mx-auto"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <input
          className="form-control w-75 mx-auto mt-4"
          type="password"
          name="password"
          placeholder="Your Password"
          required
        />
        <input
          className="form-control w-75 mx-auto mt-4"
          type="password"
          name="confirmPassword"
          placeholder="Your confirm Password"
          autoComplete="off"
          required
        />
        {setError}
        <div className="ms-3 mt-2">
          <input
            className="ms-5 ps-5"
            onClick={() => setAgree(!agree)}
            type="checkbox"
          />
          <label
            className={`ms-2 ps-2 ${agree ? "text-primary" : ""}`}
            htmlFor="trams"
          >
            Accepts Terms $ Condition fill the input 
          </label>
        </div>
        <input
          disabled={!agree}
          className={`form-control w-25  mx-auto mt-4 ${
            agree ? `bg-primary text-white` : `bg-danger text-white `
          }`}
          type="submit"
          value="Register"
        />
        <p className="w-75 mx-auto mt-3">
          All ready account ? please <Link to="/login">Login</Link>
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

export default Register;

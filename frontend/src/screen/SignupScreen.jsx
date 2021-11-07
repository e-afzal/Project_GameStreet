import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLE
import "../styles/signup.css";

// COMPONENTS
import ScreenBgd from "./../components/ScreenBgd";
import ScrollToTop from "../util/ScrollToTop";

// REDUX RELATED
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

const SignupScreen = ({ location, history }) => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let message;

  // REDUX RELATED
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  // So if user not logged in, pushed to '/signup' else go to '/' which is the HOME SCREEN
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    // If 'userInfo' exists, means we are logged in
    if (userInfo) {
      // Redirect to 'login' page if NOT logged in ELSE '/' (i.e. homescreen)
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  // FORM SUBMIT HANDLER
  const submitHandler = (e) => {
    e.preventDefault();
    if (!error && password === confirmPassword) {
      // DISPATCH REGISTER
      dispatch(register(fName, lName, email, number, password));
    }
  };

  if (password !== confirmPassword) {
    message = "Passwords do not match";
  }

  return (
    <>
      <ScreenBgd brightNess={"50%"} />
      <ScrollToTop />
      <section id="signup">
        <div className="signup-left">
          <h2 className="signup-title">Create an account</h2>
          {error && (
            <p style={{ color: "crimson", marginBlock: "15px" }}>{error}</p>
          )}
          {message && <p style={{ color: "crimson" }}>{message}</p>}
          <form className="form-group" onSubmit={submitHandler}>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First name"
              value={fName}
              onChange={(e) => setfName(e.target.value.trim())}
            />
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last name"
              value={lName}
              onChange={(e) => setlName(e.target.value.trim())}
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Contact number"
              value={number}
              onChange={(e) => setNumber(e.target.value.trim())}
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value.trim())}
            />

            <button type="submit" disabled={password !== confirmPassword}>
              Create Account
            </button>
          </form>
          <h5>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Have an account? Click here
            </Link>
          </h5>
        </div>
      </section>
    </>
  );
};

export default SignupScreen;

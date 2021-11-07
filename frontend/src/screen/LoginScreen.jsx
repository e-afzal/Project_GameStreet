import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLE
import "../styles/login.css";

// COMPONENT
import ScrollToTop from "../util/ScrollToTop";
import ScreenBgd from "../components/ScreenBgd";

// REDUX RELATED
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // REDUX RELATED
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

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
    // DISPATCH LOGIN
    dispatch(login(email, password));
  };
  return (
    <>
      <ScreenBgd brightNess={"50%"} />
      <ScrollToTop />
      <section id="login">
        <div className="login-container">
          <h2 className="login-title">Sign in</h2>

          <form className="form-group" onSubmit={submitHandler}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            {error && <p style={{ color: "crimson" }}>{error}</p>}
            <button type="submit">Sign In</button>
          </form>
          <h5>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Don't have an account? Sign up here
            </Link>
          </h5>
          <h5>
            <Link to="#">Forgot your password? Click here</Link>
          </h5>
        </div>
      </section>
    </>
  );
};

export default LoginScreen;

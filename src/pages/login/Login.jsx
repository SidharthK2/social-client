import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";

export default function Login() {
  const [box, setBox] = useState("");
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    setBox(e.target.className === "loginButton" ? "login" : "register");
    if (box === "login") {
      loginCall(
        { email: email.current.value, password: password.current.value },
        dispatch
      );
    }
  };

  console.log(user, box);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LeetNode</h3>
          <span className="loginDesc">Join the Cult</span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              required
              minLength="6"
            />
            <button className="loginButton" onClick={handleClick}>
              {isFetching && box === "login" ? (
                <CircularProgress color="inherit" size="15px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
              <a
                href="http://localhost:3000/register"
                style={{
                  textDecoration: "none",
                  color: "#fff78e",
                }}>
                Create an Account
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

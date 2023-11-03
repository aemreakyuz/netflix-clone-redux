import React from "react";
import "./SignIn.css";
function SignIn() {
  return (
    <div className="signIn">
      <form className="signIn__form">
        <h1> Sign In </h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signIn__gray">New to Netflix? </span>
          <a href="/" className="signIn__link">
            Sign Up Now.
          </a>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;

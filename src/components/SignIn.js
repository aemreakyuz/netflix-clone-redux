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
      </form>
    </div>
  );
}

export default SignIn;

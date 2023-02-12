import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <nav>
        <a href="/">
          <img src="/images/loginLogo.png" alt="" />
        </a>
        <div className="right-nav">
          <div className="join">Join now!</div>
          <div className="signIn">Sign in</div>
        </div>
      </nav>
      <section>
        <div>
          <h1>Welcome to your professional community</h1>
          <img className="login-logo-image" src="/images/meeting.png" alt="" />
        </div>

        <div className="form">
          <button className="google">
            <img className="google-img" src="/images/google.png" alt="" />
            Sign in with Google
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;

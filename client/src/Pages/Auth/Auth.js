import React from "react";
import "./Auth.css";
import logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth-left">
        <img src={logo} alt="" />
        <div className="webname">
          <h1>AK Media</h1>
          <h6>Explores the ideas throught the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className="auth-right">
      <form className="infoForm authForm">
        <h3>Login</h3>
        <div>
          <input type="text" placeholder="User Name" className="infoInput" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="infoInput"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Dont have an account SignUp</span>
          <button type="submit" className="button info-button">Login</button>
        </div>

      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="auth-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="infoInput"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="infoInput"
          />
        </div>
        <div>
          <input type="text" placeholder="User Name" className="infoInput" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="infoInput"
          />
          <input
            type="password"
            name="confirmpass"
            placeholder="Confirm Password"
            className="infoInput"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Alredy have an account. Login!</span>
        </div>
        <button type="submit" className="button info-button">SignUp</button>
      </form>
    </div>
  );
}

export default Auth;

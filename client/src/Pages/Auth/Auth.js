import React, { useState } from "react";
import "./Auth.css";
import logo from "../../img/logo.png";

const Auth = () => {

  const [isSignUp, setIsSignUp] = useState(false)

  const [data, setData] = useState({ firstname: "", lastname: "", username: "", password: "", confirmpass: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="auth">
      <div className="auth-left">
        <img src={logo} alt="" />
        <div className="webname">
          <h1>AK Media</h1>
          <h6>Explores the ideas throught the world</h6>
        </div>
      </div>
      {/* right side */}
      <div className="auth-right">
        <form className="infoForm authForm">
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
          {
            isSignUp ?
              <div>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="infoInput"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="infoInput"
                  onChange={handleChange}
                />
              </div>
              : <></>
          }

          <div>
            <input type="text" name="username" placeholder="User Name" className="infoInput" onChange={handleChange} />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="infoInput"
              onChange={handleChange}
            />
            {
              isSignUp ?
                <input
                  type="password"
                  name="confirmpass"
                  placeholder="Confirm Password"
                  className="infoInput"
                  onChange={handleChange}
                />
                : <></>
            }

          </div>
          <div>
            <span style={{ fontSize: "14px", cursor: "pointer" }} onClick={() => setIsSignUp(prev => !prev)}>
              {isSignUp ? "Alredy have an account. Login!" : "Dont have an account Signup"}
            </span>
          </div>

          <button type="submit" className="button info-button">
            {isSignUp ? "SignUp" : "Log In"}
          </button>
        </form>
      </div>

    </div>
  );
};

// function Login() {
//   return (
//     <div className="auth-right">
//       <form className="infoForm authForm">
//         <h3>Login</h3>
//         <div>
//           <input type="text" placeholder="User Name" className="infoInput" />
//         </div>
//         <div>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="infoInput"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>Dont have an account SignUp</span>
//           <button type="submit" className="button info-button">Login</button>
//         </div>

//       </form>
//     </div>
//   );
// }



export default Auth;

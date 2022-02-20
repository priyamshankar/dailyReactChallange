import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import "./css/login.css";

const Login = () => {
  let [login, setlogin] = useState({
    userId: "",
    password: "",
  });
  const getData = (event) => {
    let name=event.target.name;
    let value=event.target.value;
    setlogin({...login, [name]:value})  
  };

  return (
    <>
      <div>this is a login page</div>
      <Link to="/tub">go to logout</Link>

      <div className="login">
        <div className="form">
          <form className="login-form">
            <span className="material-icons">lock</span>
            <input
              type="text"
              placeholder="email"
              required
              name="userId"
              value={login.userId}
              onChange={getData}
            />
            <input
              type="password"
              placeholder="password"
              required
              name="password"
              value={login.password}
              onChange={getData}
            />
            <button>login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

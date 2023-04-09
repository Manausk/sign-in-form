import React, { useState } from "react";
import "./AllStyle.css";

function Task() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: "",
  });

  const onChangeHandler = (event) => {
    console.log(event);

    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="Container">
      <div className="left">
        <div className="dono">
          <div className="asity"></div>

          <div className="form">
            <div className="Formbox">
              <div className="first">
                <span>Welcome back, Manas</span>
                <div className="text">
                  Welcome back! Please enter your details
                </div>
              </div>
              <div className="btn">
                <div className="google"></div>
                <span>Log in with Google</span>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  required="required"
                  name="email"
                  onChange={onChangeHandler}
                />
                <span>Email</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  required="required"
                  name="password"
                  onChange={onChangeHandler}
                />
                <span>Password</span>
                <i></i>
              </div>
              <div className="content">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember"
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="remember-me">Remember for 30 days</label>
                </div>
                <a href="#">Forgot Password</a>
              </div>
              <button
                className="button"
                type="button"
                value="Log in"
                onClick={() => console.log(formData)}
              >
                Log in
              </button>
              <div className="last">
                <span>Don't have an account?</span>
                <a href="#">Sign up for free</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
export default Task;

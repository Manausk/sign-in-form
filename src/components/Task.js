import React from "react";
import "./AllStyle.css";

function Task() {
  return (
    <div className="Container">
      <div className="left">
        <div className="dono">
          <div className="asity"></div>
          <div className="form">
            <div className="Formbox">
              <div className="first">
                <span>Welcome back, Manas</span>
                <text>Welcome back! Please enter your details</text>
              </div>
              <div className="btn">
                <div className="google"></div>
                <span>Log in with Google</span>
              </div>
              <div className="inputBox">
                <input type="email" required="required" />
                <span>Email</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input type="password" required="required" />
                <span>Password</span>
                <i></i>
              </div>
              <div className="content">
                <div className="checkbox">
                  <input type="checkbox" id="remember-me" />
                  <label for="remember-me">Remember for 30 days</label>
                </div>
                <a href="#">Forgot Password</a>
              </div>
              <input type="submit" value="Log in" />
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

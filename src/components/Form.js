import * as React from "react";

export default function Form() {
  return (
    <>
      <h1>Welcome Back</h1>
      <p>Welcome back! Please enter your details.</p>
      <div>
        <div>
          <label>Email</label>
          <input
            className=""
            placeholder="Enter your email"
            type="email"
          />
        </div>
      </div>
      <div>
        <div>
          <label>Password</label>
          <input
            className=""
            placeholder="Enter your password"
            type="password"
          />
        </div>
      </div>
      <div>
        <div>
          <input type="checkbox" name="" id="remember" />
          <label for="remember">Remember for 30 days</label>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./style.css";
import Link from "next/link";

export const Login:React.FC = () => {
  return (
    <>
      <div>Enter your email and password to access your account</div>
      <div>
        <div>
          <input
            className="login-element-size login-form-inputs"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="login-element-size login-form-inputs"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
        </div>
        <div className="flex flex-row justify-evenly w-3/4 m-auto">
          <div>
            <input type="checkbox" name="" id="" /> <span>Remember me</span>
          </div>
          <div>
            <a href="">Forgot Password</a>
          </div>
        </div>
        <div className=" ">
          <button
            className="login-element-size login-button voilet-bgd white-text"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
      <div>
        Don&apos;t have an account?{" "}
        <Link href="/login/CreateAccount">Create Account</Link>
      </div>
      <div> <Link href="/login/PhoneLogin"> Phone number Login</Link></div>
    </>
  );
};


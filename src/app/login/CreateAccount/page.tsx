import React, { ReactHTML } from "react";
import "../Login/style.css";
import Link from "next/link";

export const CreateAccount:React.FC = () => {
  return (
    <div>
      <div>
        <input
          className="login-element-size login-form-inputs"
          type="text"
          name=""
          id=""
          placeholder="Your Name"
        />
      </div>
      <div>
        <input
          className="login-element-size login-form-inputs"
          type="text"
          name=""
          id=""
          placeholder="Phone Number"
        />
      </div>
      <div>
        <input
          className="login-element-size login-form-inputs"
          type="email"
          name=""
          id=""
          placeholder="Email Id"
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
      <div>
        <input type="checkbox" name="" id="" />{" "}
        <span>
          I have read the account <a href="">terms and conditions</a>
        </span>
      </div>
      <div>
        <button
          className="login-element-size login-button voilet-bgd white-text"
          type="submit"
        >
          Create Account
        </button>
      </div>
      <div>
        <span>
          Already have an account? <Link href="/login/Login">Login</Link> 
        </span>
      </div>
    </div>
  );
};

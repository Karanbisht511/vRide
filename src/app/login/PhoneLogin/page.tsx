'use client'

import React, { useState } from "react";
import Link from "next/link";

const PhoneLogin = () => {
  const setPhoneNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const phoneNo = event
    sessionStorage.setItem("phoneNum", JSON.stringify(phoneNo));
    console.log(phoneNo);
    
  };

  return (
    <div>
      <div>Please enter your phone number to Login or Signup</div>
      <div>
        <input
          className="login-element-size login-form-inputs"
          type="text"
          name="phone"
          id=""
          placeholder="Phone Number"
        />
      </div>
      <div>
        <input type="checkbox" name="" id="" />{" "}
        <span>
          By continuing, I agree to the <a href="">terms and conditions</a>
        </span>
      </div>
      <div className=" ">
        <Link href="/login/PhoneLogin/VerifyOTP">
          <button
            className="login-element-size login-button voilet-bgd white-text"
            type="submit"
            onClick={setPhoneNum}
          >
            Send OTP
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhoneLogin;

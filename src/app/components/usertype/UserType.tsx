import Link from "next/link";
import React from "react";
import "./style.css"

const UserType = () => {
  return (
    <div className="login-buttons-wrap">
      <div >
        {" "}
        <Link href="/login/Login">
          {" "}
          <button className="login-button voilet-bgd white-text text-left text-lg font-bold">Login as User</button>
        </Link>
      </div>
      <div>
        {" "}
        <Link
          href="/login/Login
        "
        >
          {" "}
          <button className="login-button voilet-bgd white-text text-left text-lg font-bold">Login as Vender</button>
        </Link>
      </div>
      </div>
  );
};

export default UserType;

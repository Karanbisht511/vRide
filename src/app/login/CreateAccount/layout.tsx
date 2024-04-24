import React from "react";

const layout = ({ children }: any) => {
  return (
    <div className="container">
      <div className="welcome-text">Create Your Account</div>
      <span>
        Pleae enter your details to create your account with us. it&apos;s free!
      </span>
      {children}
    </div>
  );
};

export default layout;

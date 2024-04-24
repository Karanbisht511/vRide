import React from "react";

const VerifyOTPPage = ({ phoneNo }: Number) => {
  return (
    <div>
      <div className="welcome-text">Verify with OTP</div>
      <div>We have send you the OTP via SMS to{phoneNo} </div>
      
    </div>
  );
};

export default VerifyOTPPage;

"use client";
import React, { useState } from "react";
// import Login from "base/app/login/page";
import { useRouter } from "next/navigation";

export const Page:React.FC  = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  if (loggedIn) {
    return <div>Home</div>;
  }
  router.push("/login");
};

// export default Page;

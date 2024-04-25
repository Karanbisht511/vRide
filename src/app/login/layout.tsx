"use client";

import React from "react";
import "./style.css";
import Image from "next/image";
import i from "../../../assets/cartoon-teenage-boy.svg";
import { Pathname } from "./PathName";

export const layout:React.FC  = ({ children }: any) => {
  return (
    <div className="flex flex-row borderLine overflow-x-hidden overflow-y-hidden">
      <div className="basis-2/5 voilet-bgd left-background white-text text-left">
        <div className="quote-text text-left">
          <span>GET</span>
          <br />
          <span>EVERYTHING </span>
          <br />
          <span>YOU WANT</span>
        </div>

        <div className="des-text">
          <span>Lorem ipsum dolor sit amet</span>
          <br />
          <span> consectetur. Pharetra maecenas a quis</span>
        </div>

        <div className="cartoon-boy">
          <Image src={i} width={700} height={700} alt="cartoon-teenage-boy" />
        </div>
      </div>

      <div className="basis-1/2  text-center content-center">
        <Pathname>
          <div>
            <div className="welcome-text">Welcome to Vride</div>
            {/* <div>
              Lorem ipsum dolor sit amet consectetur. Pharetra maecenas a quis
            </div> */}
          </div>
        </Pathname>
        {/* 
        {!path.includes("CreateAccount") && (
          <div>
            <div className="welcome-text">Welcome to Vride</div>
          </div>
        )} */}

        <div className="container">{children}</div>
      </div>
    </div>
  );
};

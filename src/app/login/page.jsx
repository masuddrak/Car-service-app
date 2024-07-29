"use client";
import LoginForm from "@/components/authentication/LoginForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-2 justify-between items-center  py-10">
      <Image
        src="assets/images/login/login.svg"
        width={100}
        height={100}
        alt="login image"
        className="w-[500px] h-[500px]"
      ></Image>
      <div className="w-full">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default page;

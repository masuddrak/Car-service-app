import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div className="p-20 border-[1px] rounded-md">
      <h3 className="text-xl font-semibold text-center">Login</h3>
      <form className="w-full mt-12 space-y-4">
        <div className="">
          <label htmlFor="" className="">
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="border-[1px] p-2 rounded-sm w-full  outline-0"
          />
        </div>
        <div className="">
          <label htmlFor="" className="">
            Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="border-[1px] p-2 rounded-sm w-full  outline-0"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Login"
            className="border-[1px] p-2 rounded-md w-full outline-0 bg-primary text-white font-semibold "
          />
        </div>
      </form>
      <div className="flex mt-4">
        <p>Are you ne</p>
        <Link href="/signup" className="underline">Signup Now</Link>
      </div>
    </div>
  );
};

export default LoginForm;

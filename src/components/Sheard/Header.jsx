import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

const Header = () => {
  const navlinks = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "Aout",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/service",
      name: "Service",
    },
  ];
  return (
    <nav className="bg-base-100 ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks.map((item) => (
                <Link key={item.path} href={item.path}>
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <Image
            alt="logo"
            src="/assets/logo.svg"
            height={40}
            width={80}
          ></Image>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6 text-lg">
            {navlinks.map((item) => (
              <Link key={item.path} href={item.path}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-4 items-center">
          <div className="flex items-center text-xl gap-4">
            <CiSearch></CiSearch>
            <IoBagHandleOutline/>
          </div>
          <button className="btn btn-outline btn-primary rounded-md">Appoinment</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

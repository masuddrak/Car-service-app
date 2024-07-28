import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { img, title, description, price } = service;
  return (
    <div className="rounded-md bg-base-100  shadow-xl hover:scale-105 transition-all">
      <figure>
        <Image
          src={img}
          alt="service"
          height={120}
          width={430}
          className="h-[250px] w-full object-cover rounded-t-md"
        ></Image>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          {title}
        </h2>
        <div className="text-primary flex justify-between items-center mt-4">
          <p className="text-primary">Price: ${price}</p>
          <FaArrowRightLong className=""></FaArrowRightLong>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

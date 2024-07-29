import { services } from "@/lib/services";
import React from "react";
import ServiceCard from "../Cards/ServiceCard";

const Services = () => {
  return (
    <div className="grid grid-cols-3 gap-14">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;

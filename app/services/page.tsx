import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";

const ServicesPage = async () => {
  const services = await prisma.service.findMany();

  return (
    <div>
      <Link href="/services/new">
        <p>Új munka</p>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Név</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <th>{service.name}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesPage;

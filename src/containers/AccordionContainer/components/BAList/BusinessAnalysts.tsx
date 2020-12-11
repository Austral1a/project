import React from "react";
import { EmployeeTable } from "../EmployeeTable";

const baEmployees = [
  {
    firstName: "Bob",
    lastName: "Dylan",
    birthday: "12.12.2020",
    email: "bob@gmail.com",
  },
];

export const BusinessAnalysts = () => {
  return <EmployeeTable employeeList={baEmployees} />;
};

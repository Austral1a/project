import React, { useEffect } from "react";
import { EmployeeTable } from "@components";
import { getBAEmployees } from "../../../../API";

const baEmployees = [
  {
    firstName: "Bob",
    lastName: "Dylan",
    birthday: "12.12.2020",
    email: "bob@gmail.com",
  },
];

export const BusinessAnalysts = () => {
  useEffect(() => {
    console.log(getBAEmployees());
  }, []);

  return <EmployeeTable employeeList={baEmployees} />;
};

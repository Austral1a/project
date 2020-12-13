import React from "react";
import { EmployeeTable } from "@components";
import { useSelector } from "react-redux";
import { selectEmployees } from "@StoreEmployees";

export const ProgrammersList = () => {
  const programmers = useSelector(selectEmployees("programmers"));

  return <EmployeeTable employeeList={programmers} />;
};

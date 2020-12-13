import React from "react";
import { EmployeeTable } from "@components";
import { useSelector } from "react-redux";
import { selectEmployees } from "@StoreEmployees";

export const ProjectManagersList = () => {
  const projectManagers = useSelector(selectEmployees("projectManagers"));

  return <EmployeeTable employeeList={projectManagers} />;
};

import React from "react";
import { EmployeeTable } from "@components";
import { useSelector } from "react-redux";
import { selectEmployees } from "@StoreEmployees";

export const BusinessAnalystsList = () => {
  const businessAnalysts = useSelector(selectEmployees("businessAnalysts"));

  return <EmployeeTable employeeList={businessAnalysts} />;
};

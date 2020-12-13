import React from "react";
import { EmployeeTable } from "@components";
import { useSelector } from "react-redux";
import { selectEmployees } from "@StoreEmployees";

export const QualityAssuranceList = () => {
  const quialityAssurance = useSelector(selectEmployees("qualityAssurance"));

  return <EmployeeTable employeeList={quialityAssurance} />;
};

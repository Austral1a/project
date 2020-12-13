import React, { useEffect } from "react";
import { EmployeeTable } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { getQAEmployeesAction, selectEmployees } from "@StoreEmployees";

export const QualityAssuranceList = () => {
  const qualityAssurance = useSelector(selectEmployees("qualityAssurance"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQAEmployeesAction());
  }, [dispatch]);

  return <EmployeeTable employeesList={qualityAssurance} />;
};

import React, { useEffect } from "react";
import { EmployeeTable } from "@components";
import { useDispatch, useSelector } from "react-redux";
import {
  EmployeePosition,
  getBAEmployeesAction,
  selectEmployees,
} from "@StoreEmployees";

export const BusinessAnalystsList = () => {
  const businessAnalysts = useSelector(selectEmployees(EmployeePosition.BA));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBAEmployeesAction());
  }, [dispatch]);

  return <EmployeeTable employeesList={businessAnalysts} />;
};

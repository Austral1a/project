import React, { useEffect } from "react";
import { EmployeeTable } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { getBAEmployeesAction, selectEmployees } from "@StoreEmployees";

export const BusinessAnalystsList = () => {
  const businessAnalysts = useSelector(selectEmployees("businessAnalysts"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBAEmployeesAction());
  }, [dispatch]);

  return <EmployeeTable employeesList={businessAnalysts} />;
};

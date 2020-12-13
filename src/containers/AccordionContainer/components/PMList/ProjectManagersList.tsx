import React, { useEffect } from "react";
import { EmployeeTable } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { getPMEmployeesAction, selectEmployees } from "@StoreEmployees";

export const ProjectManagersList = () => {
  const projectManagers = useSelector(selectEmployees("projectManagers"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPMEmployeesAction());
  }, [dispatch]);

  return <EmployeeTable employeesList={projectManagers} />;
};

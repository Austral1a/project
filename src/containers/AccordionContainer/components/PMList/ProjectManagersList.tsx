import React, { useEffect } from "react";
import { EmployeeTable } from "@components";
import { useDispatch, useSelector } from "react-redux";
import {
  EmployeePosition,
  getPMEmployeesAction,
  selectEmployees,
} from "@StoreEmployees";

export const ProjectManagersList = () => {
  const projectManagers = useSelector(selectEmployees(EmployeePosition.PM));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPMEmployeesAction());
  }, [dispatch]);

  return <EmployeeTable employeesList={projectManagers} />;
};

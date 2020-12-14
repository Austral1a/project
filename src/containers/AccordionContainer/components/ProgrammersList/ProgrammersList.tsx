import React, { useEffect } from "react";
import { EmployeeTable } from "@components";
import { useDispatch, useSelector } from "react-redux";
import {
  EmployeePosition,
  getProgrammersEmployeesAction,
  selectEmployees,
} from "@StoreEmployees";

export const ProgrammersList = () => {
  const programmers = useSelector(
    selectEmployees(EmployeePosition.PROGRAMMERS)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProgrammersEmployeesAction());
  }, [dispatch]);

  return <EmployeeTable employeesList={programmers} />;
};

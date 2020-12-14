import { createSelector } from "reselect";
import { EmployeeAwareState } from "./interfaces";

export type EmployeePosition =
  | "businessAnalysts"
  | "qualityAssurance"
  | "projectManagers"
  | "programmers";

export const selectEmployees = (employeePosition: EmployeePosition) => {
  return createSelector(
    (state: EmployeeAwareState) => {
      const { employeesReducer } = state;
      return employeesReducer[employeePosition].employees;
    },
    (employees) => employees
  );
};

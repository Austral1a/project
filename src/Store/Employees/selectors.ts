import { createSelector } from "reselect";
import { EmployeeAwareState } from "./interfaces";

export enum EmployeePosition {
  QA = "qualityAssurance",
  BA = "businessAnalysts",
  PM = "projectManagers",
  PROGRAMMERS = "programmers",
}

export type EmployeePositionType =
  | EmployeePosition.QA
  | EmployeePosition.BA
  | EmployeePosition.PM
  | EmployeePosition.PROGRAMMERS;

export const selectEmployees = (employeePosition: EmployeePosition) => {
  return createSelector(
    (state: EmployeeAwareState) => {
      const { employeesReducer } = state;
      return employeesReducer[employeePosition].employees;
    },
    (employees) => employees
  );
};

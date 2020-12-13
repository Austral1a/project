import { createSelector } from "reselect";
import { EmployeeAwareState } from "./interfaces";

type EmployeePosition =
  | "businessAnalysts"
  | "qualityAssurance"
  | "projectManagers"
  | "programmers";

export const selectEmployees = (employeePosition: EmployeePosition) => {
  return createSelector(
    (state: EmployeeAwareState) => {
      const {
        employeesReducer: { employees },
      } = state;
      return employees[employeePosition];
    },
    (employees) => employees
  );
};

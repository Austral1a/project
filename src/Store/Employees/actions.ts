import { FSAAuto, ErrorFSAAuto } from "flux-standard-action";
import { EmployeesResponse } from "./interfaces";

export enum EmployeeActionType {
  GET_EMPLOYEES = "GET_EMPLOYEES",
  GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS",
  GET_EMPLOYEES_FAIL = "GET_EMPLOYEES_FAIL",
}

// GET EMPLOYEES
export type GetEmployeesRequest = FSAAuto<
  typeof EmployeeActionType.GET_EMPLOYEES
>;

export type GetEmployeesSuccess = FSAAuto<
  typeof EmployeeActionType.GET_EMPLOYEES_SUCCESS,
  EmployeesResponse
>;

export type GetEmployeesFail = ErrorFSAAuto<
  typeof EmployeeActionType.GET_EMPLOYEES_FAIL,
  Error
>;

export const getEmployeesAction = (): GetEmployeesRequest => ({
  type: EmployeeActionType.GET_EMPLOYEES,
});

export const getEmployeesSuccess = (
  payload: EmployeesResponse
): GetEmployeesSuccess => ({
  type: EmployeeActionType.GET_EMPLOYEES_SUCCESS,
  payload,
});

export const getEmployeesFail = (payload: Error): GetEmployeesFail => ({
  type: EmployeeActionType.GET_EMPLOYEES_FAIL,
  payload,
  error: true,
});

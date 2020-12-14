import { FSAAuto, ErrorFSAAuto } from "flux-standard-action";
import { EmployeesResponse } from "./interfaces";

export enum EmployeeActionType {
  GET_BA_EMPLOYEES = "GET_BA_EMPLOYEES",
  GET_BA_EMPLOYEES_SUCCESS = "GET_BA_EMPLOYEES_SUCCESS",
  GET_BA_EMPLOYEES_FAIL = "GET_BA_EMPLOYEES_FAIL",

  GET_QA_EMPLOYEES = "GET_QA_EMPLOYEES",
  GET_QA_EMPLOYEES_SUCCESS = "GET_QA_EMPLOYEES_SUCCESS",
  GET_QA_EMPLOYEES_FAIL = "GET_QA_EMPLOYEES_FAIL",

  GET_PM_EMPLOYEES = "GET_PM_EMPLOYEES",
  GET_PM_EMPLOYEES_SUCCESS = "GET_PM_EMPLOYEES_SUCCESS",
  GET_PM_EMPLOYEES_FAIL = "GET_PM_EMPLOYEES_FAIL",

  GET_PROGRAMMERS_EMPLOYEES = "GET_PROGRAMMERS_EMPLOYEES",
  GET_PROGRAMMERS_EMPLOYEES_SUCCESS = "GET_PROGRAMMERS_EMPLOYEES_SUCCESS",
  GET_PROGRAMMERS_EMPLOYEES_FAIL = "GET_PROGRAMMERS_EMPLOYEES_FAIL",
}

// Business Analysts
export type GetBAEmployeesRequest = FSAAuto<
  typeof EmployeeActionType.GET_BA_EMPLOYEES
>;

export type GetBAEmployeesSuccess = FSAAuto<
  typeof EmployeeActionType.GET_BA_EMPLOYEES_SUCCESS,
  EmployeesResponse[]
>;

export type GetBAEmployeesFail = ErrorFSAAuto<
  typeof EmployeeActionType.GET_BA_EMPLOYEES_FAIL,
  Error
>;

export const getBAEmployeesAction = (): GetBAEmployeesRequest => ({
  type: EmployeeActionType.GET_BA_EMPLOYEES,
});

export const getBAEmployeesSuccess = (
  payload: EmployeesResponse[]
): GetBAEmployeesSuccess => ({
  type: EmployeeActionType.GET_BA_EMPLOYEES_SUCCESS,
  payload,
});

export const getBAEmployeesFail = (payload: Error): GetBAEmployeesFail => ({
  type: EmployeeActionType.GET_BA_EMPLOYEES_FAIL,
  payload,
  error: true,
});

// Quality Assurance
export type GetQAEmployeesRequest = FSAAuto<
  typeof EmployeeActionType.GET_QA_EMPLOYEES
>;

export type GetQAEmployeesSuccess = FSAAuto<
  typeof EmployeeActionType.GET_QA_EMPLOYEES_SUCCESS,
  EmployeesResponse[]
>;

export type GetQAEmployeesFail = ErrorFSAAuto<
  typeof EmployeeActionType.GET_QA_EMPLOYEES_FAIL,
  Error
>;

export const getQAEmployeesAction = (): GetQAEmployeesRequest => ({
  type: EmployeeActionType.GET_QA_EMPLOYEES,
});

export const getQAEmployeesSuccess = (
  payload: EmployeesResponse[]
): GetQAEmployeesSuccess => ({
  type: EmployeeActionType.GET_QA_EMPLOYEES_SUCCESS,
  payload,
});

export const getQAEmployeesFail = (payload: Error): GetQAEmployeesFail => ({
  type: EmployeeActionType.GET_QA_EMPLOYEES_FAIL,
  payload,
  error: true,
});

// Project Managers
export type GetPMEmployeesRequest = FSAAuto<
  typeof EmployeeActionType.GET_PM_EMPLOYEES
>;

export type GetPMEmployeesSuccess = FSAAuto<
  typeof EmployeeActionType.GET_PM_EMPLOYEES_SUCCESS,
  EmployeesResponse[]
>;

export type GetPMEmployeesFail = ErrorFSAAuto<
  typeof EmployeeActionType.GET_PM_EMPLOYEES_FAIL,
  Error
>;

export const getPMEmployeesAction = (): GetPMEmployeesRequest => ({
  type: EmployeeActionType.GET_PM_EMPLOYEES,
});

export const getPMEmployeesSuccess = (
  payload: EmployeesResponse[]
): GetPMEmployeesSuccess => ({
  type: EmployeeActionType.GET_PM_EMPLOYEES_SUCCESS,
  payload,
});

export const getPMEmployeesFail = (payload: Error): GetPMEmployeesFail => ({
  type: EmployeeActionType.GET_PM_EMPLOYEES_FAIL,
  payload,
  error: true,
});

// Programmers
export type GetProgrammersEmployeesRequest = FSAAuto<
  typeof EmployeeActionType.GET_PROGRAMMERS_EMPLOYEES
>;

export type GetProgrammersEmployeesSuccess = FSAAuto<
  typeof EmployeeActionType.GET_PROGRAMMERS_EMPLOYEES_SUCCESS,
  EmployeesResponse[]
>;

export type GetProgrammersEmployeesFail = ErrorFSAAuto<
  typeof EmployeeActionType.GET_PROGRAMMERS_EMPLOYEES_FAIL,
  Error
>;

export const getProgrammersEmployeesAction = (): GetProgrammersEmployeesRequest => ({
  type: EmployeeActionType.GET_PROGRAMMERS_EMPLOYEES,
});

export const getProgrammersEmployeesSuccess = (
  payload: EmployeesResponse[]
): GetProgrammersEmployeesSuccess => ({
  type: EmployeeActionType.GET_PROGRAMMERS_EMPLOYEES_SUCCESS,
  payload,
});

export const getProgrammersEmployeesFail = (
  payload: Error
): GetProgrammersEmployeesFail => ({
  type: EmployeeActionType.GET_PROGRAMMERS_EMPLOYEES_FAIL,
  payload,
  error: true,
});

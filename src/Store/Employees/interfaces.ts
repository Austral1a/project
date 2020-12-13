import { GetEmployeesFail, GetEmployeesSuccess } from "./actions";

export interface EmployeeAwareState {
  employeesReducer: EmployeeState;
}

export interface EmployeeState {
  employees: EmployeesResponse;
  name: string;
  message: string;
}

export interface EmployeeResponse {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  position: string;
  id: number;
}

export interface EmployeesResponse {
  businessAnalysts: EmployeeResponse[];
  qualityAssurance: EmployeeResponse[];
  projectManagers: EmployeeResponse[];
  programmers: EmployeeResponse[];
}

export type EmployeeAction = GetEmployeesSuccess | GetEmployeesFail;

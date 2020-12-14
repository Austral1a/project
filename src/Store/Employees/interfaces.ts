import {
  GetBAEmployeesFail,
  GetBAEmployeesSuccess,
  GetPMEmployeesFail,
  GetPMEmployeesSuccess,
  GetProgrammersEmployeesFail,
  GetProgrammersEmployeesSuccess,
  GetQAEmployeesFail,
  GetQAEmployeesSuccess,
} from "./actions";

export interface EmployeeAwareState {
  employeesReducer: EmployeeState;
}

export interface EmployeeState {
  businessAnalysts: EmployeesResponse;
  qualityAssurance: EmployeesResponse;
  projectManagers: EmployeesResponse;
  programmers: EmployeesResponse;
}

export interface EmployeesResponse {
  employees: EmployeeResponse[];
  name: "";
  message: "";
}

export interface EmployeeResponse {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  position: string;
  id: number;
}

export type EmployeeAction =
  | GetBAEmployeesSuccess
  | GetBAEmployeesFail
  | GetQAEmployeesSuccess
  | GetQAEmployeesFail
  | GetPMEmployeesSuccess
  | GetPMEmployeesFail
  | GetProgrammersEmployeesSuccess
  | GetProgrammersEmployeesFail;

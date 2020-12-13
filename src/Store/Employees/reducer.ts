import { EmployeeAction, EmployeeState } from "./interfaces";
import { EmployeeActionType } from "./actions";

const employeesInitState: EmployeeState = {
  employees: {
    businessAnalysts: [],
    programmers: [],
    projectManagers: [],
    qualityAssurance: [],
  },
  name: "",
  message: "",
};

export const employeesReducer = (
  state = employeesInitState,
  action: EmployeeAction
) => {
  switch (action.type) {
    case EmployeeActionType.GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
      };
    case EmployeeActionType.GET_EMPLOYEES_FAIL:
      return {
        ...state,
        name: action.payload.name,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

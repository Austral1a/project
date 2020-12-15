import { EmployeeAction, EmployeesResponse, EmployeeState } from "./interfaces";
import { EmployeeActionType } from "./actions";

const employeeInitState: EmployeesResponse = {
  employees: [],
  name: "",
  message: "",
};

const employeesInitState: EmployeeState = {
  businessAnalysts: employeeInitState,
  programmers: employeeInitState,
  projectManagers: employeeInitState,
  qualityAssurance: employeeInitState,
};

export const employeesReducer = (
  state = employeesInitState,
  action: EmployeeAction
) => {
  switch (action.type) {
    case EmployeeActionType.GET_BA_EMPLOYEES_SUCCESS:
      return {
        ...state,
        businessAnalysts: {
          ...state.businessAnalysts,
          employees: action.payload,
        },
      };
    case EmployeeActionType.GET_BA_EMPLOYEES_FAIL:
      return {
        ...state,
        businessAnalysts: { ...state.businessAnalysts, ...action.payload },
      };

    case EmployeeActionType.GET_QA_EMPLOYEES_SUCCESS:
      return {
        ...state,
        qualityAssurance: {
          ...state.qualityAssurance,
          employees: action.payload,
        },
      };
    case EmployeeActionType.GET_QA_EMPLOYEES_FAIL:
      return {
        ...state,
        qualityAssurance: { ...state.qualityAssurance, ...action.payload },
      };

    case EmployeeActionType.GET_PM_EMPLOYEES_SUCCESS:
      return {
        ...state,
        projectManagers: {
          ...state.projectManagers,
          employees: action.payload,
        },
      };
    case EmployeeActionType.GET_PM_EMPLOYEES_FAIL:
      return {
        ...state,
        projectManagers: { ...state.projectManagers, ...action.payload },
      };

    case EmployeeActionType.GET_PROGRAMMERS_EMPLOYEES_SUCCESS:
      return {
        ...state,
        programmers: {
          ...state.programmers,
          employees: action.payload,
        },
      };
    case EmployeeActionType.GET_PROGRAMMERS_EMPLOYEES_FAIL:
      return {
        ...state,
        programmers: { ...state.programmers, ...action.payload },
      };

    default:
      return state;
  }
};

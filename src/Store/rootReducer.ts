import { combineReducers } from "redux";
import { employeesReducer } from "./Employees";

export const rootReducer = combineReducers({
  employeesReducer,
});

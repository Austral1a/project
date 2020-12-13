import { call, put, takeLatest } from "redux-saga/effects";
import { getEmployees } from "../../API";
import {
  EmployeeActionType,
  getEmployeesFail,
  getEmployeesSuccess,
} from "./actions";

export function* getEmployeesSaga() {
  try {
    const employees = yield call(getEmployees);
    yield put(getEmployeesSuccess(employees));
  } catch (error) {
    yield put(getEmployeesFail(error));
  }
}

export function* rootEmployeesSaga() {
  yield takeLatest(EmployeeActionType.GET_EMPLOYEES, getEmployeesSaga);
}

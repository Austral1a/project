import { call, put, takeLatest, all } from "redux-saga/effects";
import { getEmployees } from "@API";
import {
  EmployeeActionType,
  getBAEmployeesFail,
  getBAEmployeesSuccess,
  getPMEmployeesFail,
  getPMEmployeesSuccess,
  getProgrammersEmployeesFail,
  getProgrammersEmployeesSuccess,
  getQAEmployeesFail,
  getQAEmployeesSuccess,
} from "./actions";
import { EmployeePosition } from "./selectors";

// Business Analysts
export function* getBAEmployeesSaga() {
  try {
    const businessAnalysts = yield call(getEmployees, EmployeePosition.BA);
    yield put(getBAEmployeesSuccess(businessAnalysts));
  } catch (error) {
    yield put(getBAEmployeesFail(error));
  }
}

// Quality Assurance
export function* getQAEmployeesSaga() {
  try {
    const qualityAssurance = yield call(getEmployees, EmployeePosition.QA);
    yield put(getQAEmployeesSuccess(qualityAssurance));
  } catch (error) {
    yield put(getQAEmployeesFail(error));
  }
}

// Project Managers
export function* getPMEmployeesSaga() {
  try {
    const projectManagers = yield call(getEmployees, EmployeePosition.PM);
    yield put(getPMEmployeesSuccess(projectManagers));
  } catch (error) {
    yield put(getPMEmployeesFail(error));
  }
}

// Programmers
export function* getProgrammersEmployeesSaga() {
  try {
    const programmers = yield call(getEmployees, EmployeePosition.PROGRAMMERS);
    yield put(getProgrammersEmployeesSuccess(programmers));
  } catch (error) {
    yield put(getProgrammersEmployeesFail(error));
  }
}

export function* rootEmployeesSaga() {
  yield all([
    yield takeLatest(EmployeeActionType.GET_BA_EMPLOYEES, getBAEmployeesSaga),
    yield takeLatest(EmployeeActionType.GET_QA_EMPLOYEES, getQAEmployeesSaga),
    yield takeLatest(EmployeeActionType.GET_PM_EMPLOYEES, getPMEmployeesSaga),
    yield takeLatest(
      EmployeeActionType.GET_PROGRAMMERS_EMPLOYEES,
      getProgrammersEmployeesSaga
    ),
  ]);
}

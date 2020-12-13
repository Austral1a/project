import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  getBAEmployees,
  getPMEmployees,
  getProgrammersEmployees,
  getQAEmployees,
} from "../../API";
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

// BA
export function* getBAEmployeesSaga() {
  try {
    const businessAnalysts = yield call(getBAEmployees);
    yield put(getBAEmployeesSuccess(businessAnalysts));
  } catch (error) {
    yield put(getBAEmployeesFail(error));
  }
}

// QA
export function* getQAEmployeesSaga() {
  try {
    const qualityAssurance = yield call(getQAEmployees);
    yield put(getQAEmployeesSuccess(qualityAssurance));
  } catch (error) {
    yield put(getQAEmployeesFail(error));
  }
}

//PM
export function* getPMEmployeesSaga() {
  try {
    const qualityAssurance = yield call(getPMEmployees);
    yield put(getPMEmployeesSuccess(qualityAssurance));
  } catch (error) {
    yield put(getPMEmployeesFail(error));
  }
}

//Programmers
export function* getProgrammersEmployeesSaga() {
  try {
    const qualityAssurance = yield call(getProgrammersEmployees);
    yield put(getProgrammersEmployeesSuccess(qualityAssurance));
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

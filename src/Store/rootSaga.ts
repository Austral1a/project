import { all } from "redux-saga/effects";
import { rootEmployeesSaga } from "./Employees";

export function* rootSaga() {
  yield all([rootEmployeesSaga()]);
}

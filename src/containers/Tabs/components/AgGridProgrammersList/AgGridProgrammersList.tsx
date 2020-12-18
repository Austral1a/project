import React, { FC, ReactElement } from "react";
import { AgGridEmployeeTable } from "@components";
import { EmployeePosition, selectEmployees } from "@StoreEmployees";
import { useSelector } from "react-redux";

export const AgGridProgrammersList: FC = (): ReactElement => {
  const programmers = useSelector(
    selectEmployees(EmployeePosition.PROGRAMMERS)
  );

  return <AgGridEmployeeTable rowData={programmers} />;
};

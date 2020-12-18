import React, { FC, ReactElement } from "react";
import { AgGridEmployeeTable } from "@components";
import { EmployeePosition, selectEmployees } from "@StoreEmployees";
import { useSelector } from "react-redux";

export const AgGridPMList: FC = (): ReactElement => {
  const projectManagers = useSelector(selectEmployees(EmployeePosition.PM));

  return <AgGridEmployeeTable rowData={projectManagers} />;
};

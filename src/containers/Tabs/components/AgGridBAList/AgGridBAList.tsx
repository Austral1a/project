import React, { FC, ReactElement } from "react";
import { AgGridEmployeeTable } from "@components";
import { EmployeePosition, selectEmployees } from "@StoreEmployees";
import { useSelector } from "react-redux";

export const AgGridBAList: FC = (): ReactElement => {
  const businessAnalysts = useSelector(selectEmployees(EmployeePosition.BA));

  return <AgGridEmployeeTable rowData={businessAnalysts} />;
};

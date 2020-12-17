import React, { FC, ReactElement } from "react";
import { AgGridEmployeeTable } from "@components";
import { EmployeePosition, selectEmployees } from "@StoreEmployees";
import { useSelector } from "react-redux";

export const AgGridQAList: FC = (): ReactElement => {
  const qualityAssurance = useSelector(selectEmployees(EmployeePosition.QA));

  return <AgGridEmployeeTable rowData={qualityAssurance} />;
};

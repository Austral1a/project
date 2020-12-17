import React, { FC, ReactElement } from "react";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { Employee } from "@StoreEmployees";
import { translation } from "@helpers";

interface AgGridColumnDefs {
  headerName: string;
  field: string;
}

interface AgGridEmployeesTableProps extends AgGridReactProps {
  rowData: Employee[];
}

export const AgGridEmployeeTable: FC<AgGridEmployeesTableProps> = ({
  rowData,
}): ReactElement => {
  const { employeeTable } = translation;

  const columns: AgGridColumnDefs[] = [
    {
      headerName: employeeTable.firstName,
      field: "firstName",
    },
    {
      headerName: employeeTable.lastName,
      field: "lastName",
    },
    {
      headerName: employeeTable.birthday,
      field: "birthday",
    },
    {
      headerName: employeeTable.email,
      field: "email",
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 700 }}>
      <AgGridReact columnDefs={columns} rowData={rowData} />
    </div>
  );
};

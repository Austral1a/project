import React, { FC, ReactElement } from "react";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { Employee } from "@StoreEmployees";
import { translation } from "@helpers";

interface AgGridColumnDefs {
  headerName: string;
  field: string;
  minWidth: number;
  flex: number;
}

interface AgGridEmployeesTableProps extends AgGridReactProps {
  rowData: Employee[];
}

const agGridEmployeeTableStyle = {
  height: "100%",
  width: "100%",
};

const defaultColsDefs = {
  minWidth: 250,
  flex: 1,
};

export const AgGridEmployeeTable: FC<AgGridEmployeesTableProps> = ({
  rowData,
}): ReactElement => {
  const { employeeTable } = translation;

  const { minWidth, flex } = defaultColsDefs;

  const columns: AgGridColumnDefs[] = [
    {
      headerName: employeeTable.firstName,
      field: "firstName",
      minWidth,
      flex,
    },
    {
      headerName: employeeTable.lastName,
      field: "lastName",
      minWidth,
      flex,
    },
    {
      headerName: employeeTable.birthday,
      field: "birthday",
      minWidth,
      flex,
    },
    {
      headerName: employeeTable.email,
      field: "email",
      minWidth,
      flex,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={agGridEmployeeTableStyle}>
      <AgGridReact columnDefs={columns} rowData={rowData} />
    </div>
  );
};

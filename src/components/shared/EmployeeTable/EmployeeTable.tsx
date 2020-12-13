import React, { FC } from "react";
import { Table, TableHeader, TableItem } from "@components";
import classes from "./EmployeeTable.module.scss";
import { translation } from "@helpers";

interface Employee {
  firstName: string;
  lastName: string;
  birthday: string;
  email: string;
}

interface EmployeeTableProps {
  employeeList: Employee[];
}

export const EmployeeTable: FC<EmployeeTableProps> = ({ employeeList }) => {
  const { employeeTable } = translation;

  return (
    <Table className={classes["table"]}>
      <TableHeader className={classes["table__header"]}>
        <h3>{employeeTable.firstName}</h3>
        <h3>{employeeTable.lastName}</h3>
        <h3>{employeeTable.birthday}</h3>
        <h3>{employeeTable.email}</h3>
      </TableHeader>
      <div className="table__body">
        {employeeList.length > 0 ? (
          employeeList.map((employee, id) => {
            return (
              <TableItem
                key={employee.email + id}
                className={classes["table__item"]}
              >
                <h3>{employee.firstName}</h3>
                <h3>{employee.lastName}</h3>
                <h3>{employee.birthday}</h3>
                <h3>{employee.email}</h3>
              </TableItem>
            );
          })
        ) : (
          <h3 className={classes["table__item--no-data"]}>
            There are no employees
          </h3>
        )}
      </div>
    </Table>
  );
};

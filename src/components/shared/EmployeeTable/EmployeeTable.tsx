import React, { FC } from "react";
import { Employee, Table, TableHeader, TableItem } from "@components";
import classes from "./EmployeeTable.module.scss";

interface EmployeeTableProps {
  employeeList: Employee[];
}

export const EmployeeTable: FC<EmployeeTableProps> = ({ employeeList }) => {
  return (
    <Table className={classes["table"]}>
      <TableHeader className={classes["table__header"]}>
        <h3>First name</h3>
        <h3>Last name</h3>
        <h3>Birthday</h3>
        <h3>Email</h3>
      </TableHeader>
      <div className="table__body">
        {employeeList.map((employee) => {
          return (
            <TableItem className={classes["table__item"]}>
              <h3>{employee.firstName}</h3>
              <h3>{employee.lastName}</h3>
              <h3>{employee.birthday}</h3>
              <h3>{employee.email}</h3>
            </TableItem>
          );
        })}
      </div>
    </Table>
  );
};

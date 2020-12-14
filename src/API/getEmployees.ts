import { resources } from "../url";
import axios from "axios";
import { EmployeePosition } from "@StoreEmployees";

export const getEmployees = async (employeePosition: EmployeePosition) => {
  const { employees } = resources;

  return await axios.get(employees[employeePosition]).then((res) => res.data);
};

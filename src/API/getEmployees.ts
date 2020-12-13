import { resources } from "../url";
import axios from "axios";

export const getBAEmployees = async () => {
  const { employees } = resources;

  return await axios.get(employees.businessAnalysts).then((res) => res.data);
};

export const getQAEmployees = async () => {
  const { employees } = resources;

  return await axios.get(employees.qualityAssurance).then((res) => res.data);
};

export const getPMEmployees = async () => {
  const { employees } = resources;

  return await axios.get(employees.projectManagers).then((res) => res.data);
};

export const getProgrammersEmployees = async () => {
  const { employees } = resources;

  return await axios.get(employees.programmers).then((res) => res.data);
};

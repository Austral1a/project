import { resources } from "../url";
import axios from "axios";

export const getEmployees = async () => {
  const { employees } = resources;

  const businessAnalysts = await axios
    .get(employees.businessAnalysts)
    .then((res) => res.data);

  const qualityAssurance = await axios
    .get(employees.qualityAssurance)
    .then((res) => res.data);

  const projectManagers = await axios
    .get(employees.projectManagers)
    .then((res) => res.data);

  const programmers = await axios
    .get(employees.programmers)
    .then((employees) => employees.data);

  return {
    businessAnalysts,
    qualityAssurance,
    projectManagers,
    programmers,
  };
};

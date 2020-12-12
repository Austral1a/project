import { resources } from "../url";
import axios from "axios";

export const getBAEmployees = async () => {
  const {
    employees: { businessAnalysts },
  } = resources;
  // TODO: Errors handle, maybe saga will handle
  const response = await axios.get(businessAnalysts);

  return response;
};

export const getQAEmployees = async () => {
  const {
    employees: { qualityAssurance },
  } = resources;

  const response = await axios.get(qualityAssurance);
};

export const getPMEmployees = async () => {
  const {
    employees: { projectManagers },
  } = resources;

  const response = await axios.get(projectManagers);
};

export const getProgrammersEmployees = async () => {
  const {
    employees: { programmers },
  } = resources;

  const response = await axios.get(programmers);
};

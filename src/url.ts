export const home: string = "http://localhost:3001";
export const employees: string = "employees";

export const resources = {
  employees: {
    businessAnalysts: `${home}/${employees}?position=businessAnalyst`,
    qualityAssurance: `${home}/${employees}?position=qualityAssurance`,
    projectManagers: `${home}/${employees}?position=projectManager`,
    programmers: `${home}/${employees}?position=programmer`,
  },
};

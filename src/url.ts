export const home: string = "http://localhost:3001";
export const employees: string = `${home}/employees/`;

interface Resources {
  employees: {
    businessAnalysts: string;
    qualityAssurance: string;
    projectManagers: string;
    programmers: string;
  };
}

export const resources: Resources = {
  employees: {
    businessAnalysts: `${employees}?position=businessAnalyst`,
    qualityAssurance: `${employees}?position=qualityAssurance`,
    projectManagers: `${employees}?position=projectManager`,
    programmers: `${employees}?position=programmer`,
  },
};

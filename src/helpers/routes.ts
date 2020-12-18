export enum RoutePath {
  home = "/",
  accordion = "/accordion",
  tabs = "/Tabs",
  item3 = "/item3",
  settings = "/settings",
}

export const tabRoutes = {
  businessAnalysts: `${RoutePath.tabs}/businessAnalysts/tab/1`,
  qualityAssurance: `${RoutePath.tabs}/qualityAssurance/tab/2`,
  projectManagers: `${RoutePath.tabs}/projectManagers/tab/3`,
  programmers: `${RoutePath.tabs}/programmers/tab/4`,
};

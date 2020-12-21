export enum RoutePath {
  home = "/",
  accordion = "/accordion",
  tabs = "/Tabs",
  item3 = "/item3",
  settings = "/settings",
}

export const tabRoutes = {
  businessAnalysts: `${RoutePath.tabs}/businessAnalysts`,
  qualityAssurance: `${RoutePath.tabs}/qualityAssurance`,
  projectManagers: `${RoutePath.tabs}/projectManagers`,
  programmers: `${RoutePath.tabs}/programmers`,
};

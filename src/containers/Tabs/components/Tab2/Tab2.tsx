import React, { FC, ReactElement } from "react";
import { translation } from "@helpers";

export const Tab2: FC = (): ReactElement => {
  const {
    tabsItems: { tab2 },
  } = translation;

  return <>{tab2.content}</>;
};

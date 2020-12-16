import React, { FC, ReactElement } from "react";
import { translation } from "@helpers";

export const Tab3: FC = (): ReactElement => {
  const {
    tabsItems: { tab3 },
  } = translation;

  return <>{tab3.content}</>;
};

import React, { FC, ReactElement } from "react";
import { translation } from "@helpers";

export const Tab1: FC = (): ReactElement => {
  const {
    tabsItems: { tab1 },
  } = translation;

  return <>{tab1.content}</>;
};

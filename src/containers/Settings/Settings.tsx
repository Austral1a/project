import React, { FC, ReactElement } from "react";
import { translation } from "@helpers";

export const Settings: FC = (): ReactElement => {
  return <h1>{translation.settings}</h1>;
};

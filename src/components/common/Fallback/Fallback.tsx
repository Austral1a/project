import React, { FC } from "react";
import { translation } from "@helpers";

export const Fallback: FC = () => {
  return <h2>{translation.fallbackLoading}</h2>;
};

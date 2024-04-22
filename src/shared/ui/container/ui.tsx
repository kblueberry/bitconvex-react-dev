import { Box } from "@mantine/core";
import { ReactNode } from "react";

import classes from "./styles.module.css";

type TProps = {
  children: ReactNode;
  width?: number;
  position?: "static" | "relative" | "absolute" | "sticky";
};

export const Container = ({ children, position = "static" }: TProps) => {
  return (
    <Box style={{ position }} className={classes.container}>
      {children}
    </Box>
  );
};

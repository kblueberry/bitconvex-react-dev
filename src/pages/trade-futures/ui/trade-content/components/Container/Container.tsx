import clsx from "clsx";
import { ReactNode } from "react";

import classes from "./Container.module.css";

export const Container = ({ children, padding = 32, className }: { children: ReactNode; padding?: number; className?: string }) => {
  return (
    <div style={{ padding: padding && padding - 1 }} className={clsx(classes.container, className)}>
      {children}
    </div>
  );
};

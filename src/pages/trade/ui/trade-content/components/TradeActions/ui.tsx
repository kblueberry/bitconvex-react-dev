import { Button, rem } from "@mantine/core";
import clsx from "clsx";

import { TradeIcon } from "@/shared/ui/icon/TradeIcon";

import classes from "./TradeActions.module.css";

export const TradeActions = () => {
  return (
    <div className={classes.tradeActionsView}>
      <div className={classes.tradeActionsFlexContainer}>
        <button className={classes.tradeIconButton}>
          <TradeIcon />
          <p className={classes.tradeButtonLabel}>Futures</p>
        </button>
        <div className={classes.stockActions}>
          <Button className={clsx(classes.btn, classes.actionButton)} h={rem("54px")} variant="success">
            Buy
          </Button>
          <Button className={clsx(classes.btn, classes.actionButton)} h={rem("54px")} variant="danger">
            Sell
          </Button>
        </div>
      </div>
    </div>
  );
};

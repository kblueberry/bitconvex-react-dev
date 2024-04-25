import { Button, Image, rem } from "@mantine/core";
import clsx from "clsx";

import classes from "./TradeActions.module.css";

export const TradeActions = () => {
  return (
    <div className={classes.tradeActionsView}>
      <div className={classes.tradeActionsFlexContainer}>
        <button className={classes.tradeIconButton}>
          <Image src={`${import.meta.env.BASE_URL}assets/tradeIcon.svg`} />
          <p className={classes.tradeButtonLabel}>Spot</p>
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

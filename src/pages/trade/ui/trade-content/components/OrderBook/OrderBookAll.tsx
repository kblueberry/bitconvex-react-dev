import clsx from "clsx";

import classes from "./OrderBook.module.css";
import { StocksTable } from "./StocksTable/StocksTable";

export const OrderBookAll = ({ header, rows }: { header: Array<string>; rows: Array<any> }) => {
  return (
    <div className={clsx(classes.flexSpaceBetween, classes.columnDirected)}>
      <StocksTable header={header} rows={rows} isPositive={true} />
      <StocksTable header={header} rows={rows} isPositive={false} />
    </div>
  );
};

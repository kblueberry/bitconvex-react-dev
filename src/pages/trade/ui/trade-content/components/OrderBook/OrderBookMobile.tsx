import clsx from "clsx";

import { header, rows } from "./OrderBook.constants";
import classes from "./OrderBook.module.css";
import { OrderBookAll } from "./OrderBookAll";
import { StocksTable } from "./StocksTable/StocksTable";

export const OrderBookMobile = ({ activeTab, activeCategory }: { activeTab: string; activeCategory: string }) => {
  return activeTab === "Chart" ? (
    <div className={clsx(classes.flexSpaceBetween, classes.rowDirected)}>
      {(activeCategory === "All" || activeCategory === "Bids") && <StocksTable {...{ header, rows, activeCategory }} isPositive={true} />}
      {(activeCategory === "All" || activeCategory === "Asks") && <StocksTable {...{ header, rows, activeCategory }} isPositive={false} />}
    </div>
  ) : (
    <OrderBookAll {...{ header, rows }} />
  );
};

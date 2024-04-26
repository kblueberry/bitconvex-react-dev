import clsx from "clsx";

import { headerMobile, rows, rowsMobile } from "./OrderBook.constants";
import classes from "./OrderBook.module.css";
import { OrderBookAll } from "./OrderBookAll";
import { Stocks } from "./Stocks/Stocks";
import { StocksBidsOrAsks } from "./Stocks/StocksBidsOrAsks";

export const OrderBookMobile = ({ activeTab, activeCategory }: { activeTab: string; activeCategory: string }) => {
  return activeTab === "Chart" ? (
    <div className={clsx(classes.flexSpaceBetween, classes.rowDirected)}>
      {activeCategory === "All" && (
        <>
          <Stocks {...{ activeCategory }} rows={rowsMobile} header={headerMobile} isPositive={true} />
          <StocksBidsOrAsks header={[...headerMobile].reverse()} rows={rowsMobile} isPositive={false} />
        </>
      )}
      {activeCategory === "Bids" && <StocksBidsOrAsks header={[...headerMobile].reverse()} rows={rowsMobile} isPositive={true} />}
      {activeCategory === "Asks" && <StocksBidsOrAsks header={[...headerMobile].reverse()} rows={rowsMobile} isPositive={false} />}
    </div>
  ) : (
    <OrderBookAll header={headerMobile} />
  );
};

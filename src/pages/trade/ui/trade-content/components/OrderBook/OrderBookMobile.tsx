import clsx from "clsx";

import { headerMobile, rowsMobile } from "./OrderBook.constants";
import classes from "./OrderBook.module.css";
import { OrderBookAll } from "./OrderBookAll";
import { Stocks } from "./Stocks/Stocks";
import { StocksBidsOrAsks } from "./Stocks/StocksBidsOrAsks";

export const OrderBookMobile = ({ activeTab, activeCategory }: { activeTab: string; activeCategory: string }) => {
  return activeTab === "Chart" ? (
    <div className={clsx(classes.flexSpaceBetween, classes.rowDirected)}>
      {activeCategory === "All" && (
        <>
          <Stocks {...{ activeCategory }} rows={rowsMobile} header={headerMobile} isPositive={true} cellsOrderChanged={false} />
          <StocksBidsOrAsks header={[...headerMobile].reverse()} rows={rowsMobile} isPositive={false} className={classes.rightPositionedTable} />
        </>
      )}
      {activeCategory === "Bids" && <StocksBidsOrAsks header={[...headerMobile].reverse()} rows={rowsMobile} isPositive={true} />}
      {activeCategory === "Asks" && <StocksBidsOrAsks header={[...headerMobile].reverse()} rows={rowsMobile} isPositive={false} />}
    </div>
  ) : (
    <OrderBookAll header={headerMobile} />
  );
};

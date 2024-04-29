import clsx from "clsx";

import { headerMobile, rowsMobile } from "./OrderBook.constants";
import classes from "./OrderBook.module.css";
import { OrderBookAll } from "./OrderBookAll";
import { StocksBtcFirst } from "./Stocks/StocksBtcFirst";
import { StocksPriceFirst } from "./Stocks/StocksPriceFirst";

export const OrderBookMobile = ({ activeTab, activeCategory }: { activeTab: string; activeCategory: string }) => {
  return activeTab === "Chart" ? (
    <div className={clsx(classes.flexSpaceBetween, classes.rowDirected)}>
      {activeCategory === "All" && (
        <>
          <StocksPriceFirst {...{ activeCategory }} rows={rowsMobile} header={headerMobile} isPositive={true} cellsOrderChanged={false} />
          <StocksBtcFirst header={[...headerMobile].reverse()} rows={rowsMobile} isPositive={false} className={classes.rightPositionedTable} />
        </>
      )}
      {activeCategory === "Bids" && <StocksBtcFirst header={[...headerMobile].reverse()} rows={rowsMobile} isPositive={true} />}
      {activeCategory === "Asks" && <StocksBtcFirst header={[...headerMobile].reverse()} rows={rowsMobile} isPositive={false} />}
    </div>
  ) : (
    <OrderBookAll header={headerMobile} />
  );
};

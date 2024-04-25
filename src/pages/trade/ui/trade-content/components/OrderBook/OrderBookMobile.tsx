import clsx from "clsx";
import { useEffect, useState } from "react";

import { header, headerMobile, rows } from "./OrderBook.constants";
import classes from "./OrderBook.module.css";
import { OrderBookAll } from "./OrderBookAll";
import { Stocks } from "./Stocks/Stocks";

export const OrderBookMobile = ({ activeTab, activeCategory }: { activeTab: string; activeCategory: string }) => {
  const [headerRows, setHeaderRows] = useState<Array<string>>(headerMobile);

  useEffect(() => {
    setHeaderRows((prev) => (activeCategory === "All" ? [...prev] : [...prev].reverse()));
  }, [activeCategory]);

  return activeTab === "Chart" ? (
    <div className={clsx(classes.flexSpaceBetween, classes.rowDirected)}>
      {(activeCategory === "All" || activeCategory === "Bids") && (
        <Stocks {...{ rows, activeCategory }} header={activeCategory === "Bids" ? [...headerMobile].reverse() : headerMobile} isPositive={true} />
      )}
      {(activeCategory === "All" || activeCategory === "Asks") && (
        <Stocks {...{ rows, activeCategory }} header={[...headerMobile].reverse()} isPositive={false} />
      )}
    </div>
  ) : (
    <OrderBookAll {...{ header, rows }} />
  );
};

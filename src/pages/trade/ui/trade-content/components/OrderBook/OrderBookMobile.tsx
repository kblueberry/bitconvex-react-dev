import clsx from "clsx";

import classes from "./OrderBook.module.css";
import { StocksTable } from "./StocksTable/StocksTable";

const categories = ["All", "Asks", "Bids"] as const;
const header = ["Price USD", "Qty BTC"];
const rows = [
  {
    id: 1,
    fill: 60,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 2,
    fill: 10,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 3,
    fill: 0,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 4,
    fill: 50,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 5,
    fill: 50,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 6,
    fill: 80,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 7,
    fill: 20,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 8,
    fill: 0,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 9,
    fill: 20,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 10,
    fill: 95,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 11,
    fill: 45,
    cells: ["$ 38,555.19", "0.299993"],
  },
];

export const OrderBookMobile = ({ activeCategory }: { activeCategory: string }) => {
  return (
    <div className={clsx(classes.flexSpaceBetween, classes.rowDirected)}>
      {(activeCategory === "All" || activeCategory === "Bids") && <StocksTable header={header} rows={rows} isPositive={true} />}
      {(activeCategory === "All" || activeCategory === "Asks") && <StocksTable header={header} rows={rows} isPositive={false} />}
    </div>
  );
};

import { Order, OrderRows } from "@/pages/trade/ui/trade-content/components/OrderBook/OrderBook.types";

export const transformAsksAndBidsRows = (rows: OrderRows) => {
  return [...rows].map((row: Order) => {
    row.cells = { ...row }.cells.reverse();
    return row;
  });
};

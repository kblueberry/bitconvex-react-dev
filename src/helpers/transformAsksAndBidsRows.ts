import { Order, OrderRows } from "@/pages/trade/ui/trade-content/components/OrderBook/OrderBook.types";

export const transformAsksAndBidsRows = (rows: OrderRows, transform: boolean = false) => {
  if (transform) {
    return [...rows].map((row: Order) => {
      row.cells = { ...row }.cells.reverse();
      return row;
    });
  }

  return rows;
};

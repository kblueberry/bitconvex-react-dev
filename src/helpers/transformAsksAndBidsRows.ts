import { Order, OrderRows } from "@/pages/trade/ui/trade-content/components/OrderBook/OrderBook.types";

export const transformAsksAndBidsRows = (rows: OrderRows) => {
  return JSON.parse(JSON.stringify(rows)).map((row: Order) => {
    row.cells = [...JSON.parse(JSON.stringify(row)).cells].reverse();
    return row;
  });
};

import { Table } from "@mantine/core";
import clsx from "clsx";

import { OrderRows as IOrderRows } from "../OrderBook";
import classes from "../OrderBook.module.css";

interface OrdersProps {
  rows: IOrderRows;
  className?: string;
  activeCategory: string;
}

export const OrderRows = ({ rows, className, activeCategory }: OrdersProps) => {
  return rows.map((row) => (
    <Table.Tr
      style={{
        background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${
          activeCategory === "All" || activeCategory === "Bids" ? "rgba(90,222,167,0.8)" : "rgba(244, 74, 74, 0.8)"
        } ${100 - row.fill}%)`,
      }}
      key={row.id}
      className={activeCategory === "All" || activeCategory === "Bids" ? classes.positive : classes.negative}
    >
      {row.cells.map((td, index) => (
        <Table.Td key={td} className={clsx({ [classes.hidden]: window.innerWidth < 600 && index === 2 })}>
          <p>{td}</p>
        </Table.Td>
      ))}
    </Table.Tr>
  ));
};

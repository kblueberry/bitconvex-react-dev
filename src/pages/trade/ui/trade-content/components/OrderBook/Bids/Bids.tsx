import { Table } from "@mantine/core";
import clsx from "clsx";

import classes from "../OrderBook.module.css";
import { OrderRows } from "../OrderBook.types";

interface BidsProps {
  rows: OrderRows;
  isPositive: boolean;
  activeCategory: string;
}

export const Bids = ({ rows, isPositive, activeCategory }: BidsProps) => {
  return (
    <Table.Tbody className={classes.tableBody}>
      {rows.map((row) => (
        <Table.Tr
          style={{
            background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${
              isPositive ? "rgba(90,222,167,0.8)" : "rgba(244, 74, 74, 0.8)"
            } ${100 - row.fill}%)`,
          }}
          key={row.id}
          className={
            isPositive ? classes.positive : clsx(classes.negative, { [classes.orderRowReversed]: !!activeCategory && activeCategory === "All" })
          }
        >
          {row.cells.map((td, index) => (
            <Table.Td key={td} hidden={index === 2}>
              <p>{td}</p>
            </Table.Td>
          ))}
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

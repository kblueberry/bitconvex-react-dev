import { Table } from "@mantine/core";
import clsx from "clsx";

import classes from "../OrderBook.module.css";
import { OrderRows } from "../OrderBook.types";

interface BidsProps {
  rows: OrderRows;
  isPositive: boolean;
}

export const Orders = ({ rows, isPositive }: BidsProps) => {
  return (
    <Table.Tbody className={classes.tableBody}>
      {rows.map((row) => (
        <Table.Tr key={row.id} className={isPositive ? classes.positive : clsx(classes.negative, classes.orderRowReversed)}>
          {row.cells.map((td, index) => (
            <Table.Td key={td} hidden={index === 2} className={classes.tableCell}>
              <p className={classes.tableCellValue}>{td}</p>
            </Table.Td>
          ))}
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

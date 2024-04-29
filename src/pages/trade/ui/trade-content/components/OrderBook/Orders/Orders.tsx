import { Table } from "@mantine/core";
import clsx from "clsx";

import classes from "../OrderBook.module.css";
import { OrderRows } from "../OrderBook.types";

interface BidsProps {
  rows: OrderRows;
  isPositive: boolean;
  cellsOrderChanged: boolean;
  className?: string;
}

export const Orders = ({ rows, isPositive, cellsOrderChanged, className = "" }: BidsProps) => {
  return (
    <Table.Tbody className={classes.tableBody}>
      {rows.map((row) => (
        <Table.Tr
          key={row.id}
          className={clsx(
            isPositive ? classes.positive : classes.negative,
            cellsOrderChanged ? classes.stocksRowReversed : classes.stocksRow,
            className,
          )}
        >
          {row.cells.map((td) => (
            <Table.Td key={td} className={classes.tableCell}>
              <p className={classes.tableCellValue}>{td}</p>
            </Table.Td>
          ))}
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

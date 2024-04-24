import { Table } from "@mantine/core";

import classes from "../OrderBook.module.css";

export const Bids = ({ rows, isPositive }: { rows: Array<any>; isPositive: boolean }) => {
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
          className={isPositive ? classes.positive : classes.negative}
        >
          {row.cells.map((td) => (
            <Table.Td key={td}>
              <p>{td}</p>
            </Table.Td>
          ))}
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

import { Table } from "@mantine/core";
import clsx from "clsx";

import { NegativeTrendIcon } from "@/shared/ui/icon/NegativeTrendIcon";
import { PositiveTrendIcon } from "@/shared/ui/icon/PositiveTrendIcon";
import { SortIcon } from "@/shared/ui/icon/SortIcon";

import { fullRows, header, rows } from "./OrderBook.constants";
import classes from "./OrderBook.module.css";

export const OrderBookDesktop = ({ activeCategory }: { activeCategory: string }) => {
  return (
    <Table>
      <Table.Thead className={classes.tableTHead}>
        <Table.Tr>
          {header.map((head) => (
            <Table.Th key={head} className={classes.tableTh}>
              <div>
                <p>{head}</p>
                <SortIcon />
              </div>
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody className={classes.tableBody}>
        {(activeCategory === "All" ? rows : fullRows).map((row) => (
          <Table.Tr
            style={{
              background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${
                activeCategory === "All" || activeCategory === "Bids" ? "rgba(90,222,167,0.8)" : "rgba(244, 74, 74, 0.8)"
              } ${100 - row.fill}%)`,
            }}
            key={row.id}
            className={activeCategory === "All" || activeCategory === "Bids" ? classes.positive : classes.negative}
          >
            {row.cells.map((td) => (
              <Table.Td key={td}>
                <p>{td}</p>
              </Table.Td>
            ))}
          </Table.Tr>
        ))}
        <Table.Tr>
          <Table.Td className={classes.totalCell} colSpan={100}>
            <p
              className={clsx(classes.orderBookInfo, {
                [classes.negative]: activeCategory === "Bids",
                [classes.positive]: activeCategory === "All" || activeCategory === "Asks",
              })}
            >
              $ 38,555.19 {activeCategory === "Bids" ? <NegativeTrendIcon /> : <PositiveTrendIcon />}
            </p>
          </Table.Td>
        </Table.Tr>
        {activeCategory === "All" &&
          rows.map((row) => (
            <Table.Tr
              style={{
                background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, rgba(244, 74, 74, 0.8)
          ${100 - row.fill}%)`,
              }}
              key={row.id}
              className={classes.negative}
            >
              {row.cells.map((td) => (
                <Table.Td key={td}>{td}</Table.Td>
              ))}
            </Table.Tr>
          ))}
      </Table.Tbody>
    </Table>
  );
};

import { Table } from "@mantine/core";
import clsx from "clsx";

import { SortIcon } from "@/shared/ui/icon/SortIcon";

import { OrdersTableProps } from "../OrderBook";
import classes from "../OrderBook.module.css";
import { OrderRows } from "../OrderRows/OrderRows";

export const OrdersAllMobile = ({ header, isMobile, rows, activeCategory }: OrdersTableProps) => {
  return (
    <Table>
      <Table.Thead className={classes.tableTHead}>
        <Table.Tr>
          {header.map((head, index) => (
            <Table.Th key={head} className={clsx(classes.tableTh, { [classes.hidden]: index === 2 && window.innerWidth < 600 })}>
              <div>
                <p>{head}</p>
                <SortIcon />
              </div>
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody className={classes.tableBody}>
        {rows.map((row) => (
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
        {rows.map((row) => (
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
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          <OrderRows {...{ rows, activeCategory }} />
          <OrderRows {...{ rows, activeCategory }} />
        </div> */}
        {/* <Table.Tr>
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
          </Table.Tr> */}

        {/* {activeCategory === "All" &&
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
          ))} */}
      </Table.Tbody>
    </Table>
  );
};

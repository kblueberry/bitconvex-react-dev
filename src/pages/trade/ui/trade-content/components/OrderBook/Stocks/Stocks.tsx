import { Table } from "@mantine/core";
import clsx from "clsx";

import { SortIcon } from "@/shared/ui/icon/SortIcon";

import classes from "../OrderBook.module.css";
import { OrderRows } from "../OrderBook.types";
import { Orders } from "../Orders/Orders";

interface TableProps {
  header: Array<string>;
  rows: OrderRows;
  isPositive: boolean;
  activeCategory?: string;
}

// TODO change order of rows on Bids tab, refactor .stocksTableReversed
export const Stocks = ({ header, rows, isPositive, activeCategory }: TableProps) => {
  return (
    <Table className={clsx({ [classes.stocksTableReversed]: activeCategory !== "All" || !isPositive })}>
      <Table.Thead className={classes.tableTHead}>
        <Table.Tr className={activeCategory === "All" && isPositive ? "" : classes.orderRowReversed}>
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
      <Orders {...{ rows, isPositive }} cellsOrderChanged={activeCategory !== "All" || !isPositive} />
    </Table>
  );
};

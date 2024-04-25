import { Table } from "@mantine/core";

import { SortIcon } from "@/shared/ui/icon/SortIcon";

import classes from "../OrderBook.module.css";
import { OrderRows } from "../OrderBook.types";
import { Orders } from "../Orders/Orders";

interface TableProps {
  header: Array<string>;
  className?: string;
  rows: OrderRows;
  isPositive: boolean;
  activeCategory?: string;
}

export const Stocks = ({ header, className, rows, isPositive, activeCategory }: TableProps) => {
  return (
    <Table>
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
      <Orders {...{ rows, isPositive }} />
    </Table>
  );
};

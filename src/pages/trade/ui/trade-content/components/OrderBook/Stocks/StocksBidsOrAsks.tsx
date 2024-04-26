import { transformAsksAndBidsRows } from "@/helpers/transformAsksAndBidsRows";
import { Table } from "@mantine/core";

import { SortIcon } from "@/shared/ui/icon/SortIcon";

import classes from "../OrderBook.module.css";
import { OrderRows } from "../OrderBook.types";
import { Orders } from "../Orders/Orders";

interface TableProps {
  header: Array<string>;
  rows: OrderRows;
  isPositive: boolean;
}

// TODO change order of rows on Bids tab, refactor .stocksTableReversed
export const StocksBidsOrAsks = ({ header, rows, isPositive }: TableProps) => {
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
      <Orders {...{ isPositive }} rows={transformAsksAndBidsRows(rows)} cellsOrderChanged={true} />
    </Table>
  );
};

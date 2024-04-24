import { Table } from "@mantine/core";

import { SortIcon } from "@/shared/ui/icon/SortIcon";

import { Bids } from "../Bids/Bids";
import classes from "../OrderBook.module.css";

export const StocksTable = ({
  header,
  className,
  rows,
  isPositive,
}: {
  header: Array<string>;
  className?: string;
  rows: Array<any>;
  isPositive: boolean;
}) => {
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
      <Bids {...{ rows, isPositive }} />
    </Table>
  );
};

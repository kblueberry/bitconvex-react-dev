import { Group, Table } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { MarketSortIcon } from "@/shared/ui";

import classes from "./HistoryTab.module.css";

const header = ["Pairs", "Direction", "Filled Qty", "Filled Price"];
const data = [
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Sell",
    },
    {
      key: "Filled Qty",
      value: "163.0368 BTC",
    },
    {
      key: "Filled Price",
      value: "45550.27",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Buy",
    },
    {
      key: "Filled Qty",
      value: "163.0368 BTC",
    },
    {
      key: "Filled Price",
      value: "45550.27",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Sell",
    },
    {
      key: "Filled Qty",
      value: "163.0368 BTC",
    },
    {
      key: "Filled Price",
      value: "45550.27",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Buy",
    },
    {
      key: "Filled Qty",
      value: "163.0368 BTC",
    },
    {
      key: "Filled Price",
      value: "45550.27",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Sell",
    },
    {
      key: "Filled Qty",
      value: "163.0368 BTC",
    },
    {
      key: "Filled Price",
      value: "45550.27",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Sell",
    },
    {
      key: "Filled Qty",
      value: "163.0368 BTC",
    },
    {
      key: "Filled Price",
      value: "45550.27",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Sell",
    },
    {
      key: "Filled Qty",
      value: "163.0368 BTC",
    },
    {
      key: "Filled Price",
      value: "45550.27",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Sell",
    },
    {
      key: "Filled Qty",
      value: "163.0368 BTC",
    },
    {
      key: "Filled Price",
      value: "45550.27",
    },
  ],
];
export const HistoryTabMobile = () => {
  const [sortState, setSortState] = useState<{ sortCol: string; sortFunc: 1 | 2 | 3 }>({ sortCol: "", sortFunc: 1 });
  const sortHandler = (cell: string) => {
    if (cell !== sortState.sortCol) setSortState({ sortCol: cell, sortFunc: 2 });
    if (cell === sortState.sortCol) setSortState({ ...sortState, sortFunc: sortState.sortFunc === 3 ? 1 : ((sortState.sortFunc + 1) as 2 | 3) });
  };
  return (
    <Table className={classes.table} withRowBorders={false}>
      <Table.Thead>
        <Table.Tr>
          {header.map((cell) => (
            <Table.Th key={cell}>
              <Group gap={0} onClick={() => sortHandler(cell)}>
                {cell}
                <div
                  className={clsx(
                    classes.sortArrowWrapper,
                    sortState.sortCol === cell && (sortState.sortFunc === 2 || sortState.sortFunc === 3) && classes.active,
                    sortState.sortCol === cell && sortState.sortFunc === 3 && classes.rotate,
                  )}
                >
                  <MarketSortIcon width={20} height={20} />
                </div>
              </Group>
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row, i) => (
          <Table.Tr key={i}>
            {row.map((cell) => (
              <Table.Td key={cell.key} className={clsx({ [classes.green]: cell.value === "Buy", [classes.red]: cell.value === "Sell" })}>
                {cell.value}
              </Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
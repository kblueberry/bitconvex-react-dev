import { Group, Table } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { MarketSortIcon } from "@/shared/ui";

import classes from "./OrdersTab.module.css";
import { TPSLInput } from "./TPSLInput/TPSLInput";

const header = ["Pairs", "Direction", "Qty", "Entry Price", "Mark Price", "Liq. Price", "TP/SL", "P&L", "Close By"];
const data = [
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Short",
    },
    {
      key: "Qty",
      value: "463799.4739 BTC",
    },
    {
      key: "Entry Price",
      value: "46373.15",
    },
    {
      key: "Mark Price",
      value: "46379.15",
    },
    {
      key: "Liq. Price",
      value: "15463.734",
    },
    {
      key: "TP/SL",
      value: <TPSLInput />,
    },
    {
      key: "P&L",
      value: "5043.267",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Long",
    },
    {
      key: "Qty",
      value: "463799.4739 BTC",
    },
    {
      key: "Entry Price",
      value: "46373.15",
    },
    {
      key: "Mark Price",
      value: "46379.15",
    },
    {
      key: "Liq. Price",
      value: "15463.734",
    },
    {
      key: "TP/SL",
      value: <TPSLInput />,
    },
    {
      key: "P&L",
      value: "5043.267",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Short",
    },
    {
      key: "Qty",
      value: "463799.4739 BTC",
    },
    {
      key: "Entry Price",
      value: "46373.15",
    },
    {
      key: "Mark Price",
      value: "46379.15",
    },
    {
      key: "Liq. Price",
      value: "15463.734",
    },
    {
      key: "TP/SL",
      value: <TPSLInput />,
    },
    {
      key: "P&L",
      value: "5043.267",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Short",
    },
    {
      key: "Qty",
      value: "463799.4739 BTC",
    },
    {
      key: "Entry Price",
      value: "46373.15",
    },
    {
      key: "Mark Price",
      value: "46379.15",
    },
    {
      key: "Liq. Price",
      value: "15463.734",
    },
    {
      key: "TP/SL",
      value: <TPSLInput />,
    },
    {
      key: "P&L",
      value: "5043.267",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Short",
    },
    {
      key: "Qty",
      value: "463799.4739 BTC",
    },
    {
      key: "Entry Price",
      value: "46373.15",
    },
    {
      key: "Mark Price",
      value: "46379.15",
    },
    {
      key: "Liq. Price",
      value: "15463.734",
    },
    {
      key: "TP/SL",
      value: <TPSLInput />,
    },
    {
      key: "P&L",
      value: "5043.267",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Short",
    },
    {
      key: "Qty",
      value: "463799.4739 BTC",
    },
    {
      key: "Entry Price",
      value: "46373.15",
    },
    {
      key: "Mark Price",
      value: "46379.15",
    },
    {
      key: "Liq. Price",
      value: "15463.734",
    },
    {
      key: "TP/SL",
      value: <TPSLInput />,
    },
    {
      key: "P&L",
      value: "5043.267",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Short",
    },
    {
      key: "Qty",
      value: "463799.4739 BTC",
    },
    {
      key: "Entry Price",
      value: "46373.15",
    },
    {
      key: "Mark Price",
      value: "46379.15",
    },
    {
      key: "Liq. Price",
      value: "15463.734",
    },
    {
      key: "TP/SL",
      value: <TPSLInput />,
    },
    {
      key: "P&L",
      value: "5043.267",
    },
  ],
  [
    {
      key: "Pairs",
      value: "Bitcoin/USDT",
    },
    {
      key: "Direction",
      value: "Short",
    },
    {
      key: "Qty",
      value: "463799.4739 BTC",
    },
    {
      key: "Entry Price",
      value: "46373.15",
    },
    {
      key: "Mark Price",
      value: "46379.15",
    },
    {
      key: "Liq. Price",
      value: "15463.734",
    },
    {
      key: "TP/SL",
      value: <TPSLInput />,
    },
    {
      key: "P&L",
      value: "5043.267",
    },
  ],
];
export const OrdersTab = () => {
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
              <Table.Td
                key={cell.key}
                className={clsx({
                  [classes.green]: cell.value === "Long" || (cell.key === "P&L" && i % 2 === 0),
                  [classes.red]: cell.value === "Short" || (cell.key === "P&L" && i % 2 === 1),
                })}
              >
                {cell.value}
              </Table.Td>
            ))}
            <Table.Td>
              <button>Market</button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

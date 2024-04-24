import { Stack, Table, Text } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { NegativeTrendIcon } from "@/shared/ui/icon/NegativeTrendIcon";
import { PositiveTrendIcon } from "@/shared/ui/icon/PositiveTrendIcon";
import { SortIcon } from "@/shared/ui/icon/SortIcon";

import { Container } from "../Container/Container";
import { Bids } from "./Bids/Bids";
import classes from "./OrderBook.module.css";

const categories = ["All", "Asks", "Bids"] as const;
const header = ["Price USD", "Qty BTC"];
const rows = [
  {
    id: 1,
    fill: 60,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 2,
    fill: 10,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 3,
    fill: 0,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 4,
    fill: 50,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 5,
    fill: 50,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 6,
    fill: 80,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 7,
    fill: 20,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 8,
    fill: 0,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 9,
    fill: 20,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 10,
    fill: 95,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 11,
    fill: 45,
    cells: ["$ 38,555.19", "0.299993"],
  },
];

export const OrderBookMobile = ({ activeCategory }: { activeCategory: string }) => {
  return (
    <div className={clsx(classes.flexSpaceBetween, classes.rowDirected)}>
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
        <Bids rows={rows} isPositive={activeCategory === "All" || activeCategory === "Bids"} />
      </Table>
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
        <Bids rows={rows} isPositive={false} />
      </Table>
    </div>
  );
};

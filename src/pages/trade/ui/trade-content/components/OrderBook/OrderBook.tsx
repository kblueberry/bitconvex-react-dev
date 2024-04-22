import { Stack, Table, Text } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { NegativeTrendIcon } from "@/shared/ui/icon/NegativeTrendIcon";
import { PositiveTrendIcon } from "@/shared/ui/icon/PositiveTrendIcon";
import { SortIcon } from "@/shared/ui/icon/SortIcon";

import { Container } from "../Container/Container";
import classes from "./OrderBook.module.css";

const categories = ["All", "Asks", "Bids"] as const;
const header = ["Price USD", "Qty BTC", "Total USD"];
const rows = [
  {
    id: 1,
    fill: 60,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 2,
    fill: 10,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 3,
    fill: 0,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 4,
    fill: 50,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 5,
    fill: 50,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 6,
    fill: 80,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 7,
    fill: 20,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 8,
    fill: 0,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 9,
    fill: 20,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 10,
    fill: 95,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 11,
    fill: 45,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
];
const fullRows = [
  ...rows,
  {
    id: 12,
    fill: 77,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 13,
    fill: 88,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 14,
    fill: 55,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 15,
    fill: 33,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 16,
    fill: 22,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 17,
    fill: 46,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 18,
    fill: 37,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 19,
    fill: 54,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 20,
    fill: 66,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 21,
    fill: 99,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 22,
    fill: 10,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 23,
    fill: 16,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 24,
    fill: 45,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
];

export const OrderBook = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  return (
    <Container style={{ height: "100%" }}>
      <Stack gap={32} h={"100%"}>
        <Text className={classes.orderBookTitle}>Order Book</Text>
        <div className={classes.orderBookButtonsWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={clsx(classes.orderBooksButton, { [classes.active]: activeCategory === cat })}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
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
      </Stack>
    </Container>
  );
};

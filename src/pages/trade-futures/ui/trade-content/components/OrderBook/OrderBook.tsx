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

export const OrderBook = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  return (
    <div className={classes.orderBookWrapper}>
      <Container>
        <Stack gap={32}>
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
          <Stack gap={20} hidden mah={494}>
            <div className={classes.tableScrollContainer}>
              <Table stickyHeader>
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
                </Table.Tbody>
              </Table>
            </div>
            <p
              className={clsx(classes.orderBookInfo, {
                [classes.positive]: activeCategory === "All" || activeCategory === "Asks",
                [classes.negative]: activeCategory === "Bids",
              })}
            >
              $ 38,555.19 {activeCategory === "Bids" ? <NegativeTrendIcon /> : <PositiveTrendIcon />}
            </p>

            {activeCategory === "All" && (
              <div className={classes.tableScrollContainer}>
                <Table stickyHeader>
                  <Table.Tbody className={classes.tableBody}>
                    {rows.map((row) => (
                      <Table.Tr
                        style={{
                          background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${"rgba(244, 74, 74, 0.8)"} ${100 - row.fill}%)`,
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
              </div>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

import { useResize } from "@/hooks/useResize";
import { Stack, Text } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { Container } from "../Container/Container";
import { categories } from "./OrderBook.constants";
import classes from "./OrderBook.module.css";
import { OrderBookDesktop } from "./OrderBookDesktop";
import { OrderBookMobile } from "./OrderBookMobile";

export const OrderBook = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  const { isAdaptive } = useResize(1024);

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
        {isAdaptive ? <OrderBookMobile {...{ activeCategory }} activeTab="Chart" /> : <OrderBookDesktop {...{ activeCategory }} />}
      </Stack>
    </Container>
  );
};

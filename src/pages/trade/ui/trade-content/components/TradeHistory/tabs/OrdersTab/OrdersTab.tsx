import { Group, Table } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { MarketSortIcon } from "@/shared/ui";

import classes from "./OrdersTab.module.css";
import { OrdersTabDesktop } from "./OrdersTabDesktop";
import { OrdersTabMobile } from "./OrdersTabMobile";

const header = ["Pairs", "Direction", "Order Type", "Qty", "Order Price", "Order ID", "Order Time", "Action"];
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
      key: "Order Type",
      value: "Limit",
    },
    {
      key: "Qty",
      value: "1583.4739 BTC",
    },
    {
      key: "Order Price",
      value: "46373.15",
    },
    {
      key: "Order ID",
      value: "29f83v9",
    },
    {
      key: "Order Time",
      value: "24.05.2024 13:25:10",
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
      key: "Order Type",
      value: "Limit",
    },
    {
      key: "Qty",
      value: "1583.4739 BTC",
    },
    {
      key: "Order Price",
      value: "46373.15",
    },
    {
      key: "Order ID",
      value: "29f83v9",
    },
    {
      key: "Order Time",
      value: "24.05.2024 13:25:10",
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
      key: "Order Type",
      value: "Limit",
    },
    {
      key: "Qty",
      value: "1583.4739 BTC",
    },
    {
      key: "Order Price",
      value: "46373.15",
    },
    {
      key: "Order ID",
      value: "29f83v9",
    },
    {
      key: "Order Time",
      value: "24.05.2024 13:25:10",
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
      key: "Order Type",
      value: "Limit",
    },
    {
      key: "Qty",
      value: "1583.4739 BTC",
    },
    {
      key: "Order Price",
      value: "46373.15",
    },
    {
      key: "Order ID",
      value: "29f83v9",
    },
    {
      key: "Order Time",
      value: "24.05.2024 13:25:10",
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
      key: "Order Type",
      value: "Limit",
    },
    {
      key: "Qty",
      value: "1583.4739 BTC",
    },
    {
      key: "Order Price",
      value: "46373.15",
    },
    {
      key: "Order ID",
      value: "29f83v9",
    },
    {
      key: "Order Time",
      value: "24.05.2024 13:25:10",
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
      key: "Order Type",
      value: "Limit",
    },
    {
      key: "Qty",
      value: "1583.4739 BTC",
    },
    {
      key: "Order Price",
      value: "46373.15",
    },
    {
      key: "Order ID",
      value: "29f83v9",
    },
    {
      key: "Order Time",
      value: "24.05.2024 13:25:10",
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
      key: "Order Type",
      value: "Limit",
    },
    {
      key: "Qty",
      value: "1583.4739 BTC",
    },
    {
      key: "Order Price",
      value: "46373.15",
    },
    {
      key: "Order ID",
      value: "29f83v9",
    },
    {
      key: "Order Time",
      value: "24.05.2024 13:25:10",
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
      key: "Order Type",
      value: "Limit",
    },
    {
      key: "Qty",
      value: "1583.4739 BTC",
    },
    {
      key: "Order Price",
      value: "46373.15",
    },
    {
      key: "Order ID",
      value: "29f83v9",
    },
    {
      key: "Order Time",
      value: "24.05.2024 13:25:10",
    },
  ],
];
export const OrdersTab = () => {
  return window.innerWidth < 600 ? <OrdersTabMobile /> : <OrdersTabDesktop />;
};

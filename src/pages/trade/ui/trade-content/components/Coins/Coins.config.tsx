import { Tab } from "@/shared/ui/tabs/Tabs.types";

import { CoinsTable } from "./components/CoinsTable/CoinsTable";

export const CoinsTabs: Tab[] = [
  {
    title: "All",
    content: <CoinsTable />,
    id: "all",
  },
  {
    title: "USDT",
    content: <CoinsTable />,
    id: "usdt",
  },
  {
    title: "BUSD",
    content: <CoinsTable />,
    id: "busd",
  },
  {
    title: "FIAT",
    content: <CoinsTable />,
    id: "fiat",
  },
];

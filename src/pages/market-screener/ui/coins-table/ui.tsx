import { Group, Table, Text, Title, UnstyledButton, rem } from "@mantine/core";
import clsx from "clsx";
import React, { useCallback, useMemo, useState } from "react";
import { P, match } from "ts-pattern";

import {
  AnchorProtocolIcon,
  BinanceCoinIcon,
  BitcoinIcon,
  CardanoIcon,
  ChainlinkIcon,
  CosmosIcon,
  DogecoinIcon,
  EthereumIcon,
  MarketSortIcon,
  PolkadotIcon,
  RateIcon,
  RateType,
  StarIcon,
  StellarIcon,
  SuperFarmIcon,
  TetherIcon,
  USDCoinIcon,
  UniswapIcon,
  XRPIcon,
} from "@/shared/ui";

import classes from "./styles.module.css";

interface Coin {
  icon: React.ReactNode;
  name: string;
  price: number;
  shortName: string;
  change: number;
  changePrice: number;
  hight: number;
  low: string;
  vol: string;
  volDayUsd: string;
  volDayChgPercent: number;
}

interface Header {
  label: string;
  sortable: boolean;
  className?: string;
}

type SortingLabel = "#" | "Coin Name" | "Price" | "CHG%" | "CHG" | "HIGH" | "LOW" | "VOL" | "VOL 24 USD" | "VOL 24 CHG%" | "TR";
type SortingDirection = "ASC" | "DESC";

const COINS: Coin[] = [
  {
    icon: <BitcoinIcon />,
    name: "Bitcoin",
    price: 43975.72,
    shortName: "BTC",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <EthereumIcon />,
    name: "Ethereum",
    price: 43975.72,
    shortName: "ETH",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <SuperFarmIcon />,
    name: "SuperFarm",
    price: 43975.72,
    shortName: "SUPER",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <TetherIcon />,
    name: "Tether",
    price: 43975.72,
    shortName: "USDT",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <BinanceCoinIcon />,
    name: "Binance Coin",
    price: 43975.72,
    shortName: "BNB",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <CardanoIcon />,
    name: "Cardano",
    price: 43975.72,
    shortName: "ADA",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <XRPIcon />,
    name: "XRP",
    price: 43975.72,
    shortName: "XRP",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <USDCoinIcon />,
    name: "USD Coin",
    price: 43975.72,
    shortName: "USDC",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <DogecoinIcon />,
    name: "Dogecoin",
    price: 43975.72,
    shortName: "DOGE",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <PolkadotIcon />,
    name: "Polkadot",
    price: 43975.72,
    shortName: "DOT",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <UniswapIcon />,
    name: "Uniswap",
    price: 43975.72,
    shortName: "UNI",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <StellarIcon />,
    name: "Stellar",
    price: 43975.72,
    shortName: "XLM",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <AnchorProtocolIcon />,
    name: "Anchor Protocol",
    price: 43975.72,
    shortName: "ANC",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <ChainlinkIcon />,
    name: "Chainlink",
    price: 43975.72,
    shortName: "LINK",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
  {
    icon: <CosmosIcon />,
    name: "Cosmos",
    price: 43975.72,
    shortName: "ATOM",
    change: +0.6,
    changePrice: 44727.8,
    hight: 43318.64,
    low: "564.350M",
    vol: "5.401K",
    volDayUsd: "5.018B",
    volDayChgPercent: -52.16,
  },
];

const HEADERS: Header[] = [
  {
    label: "#",
    sortable: true,
  },
  {
    label: "Coin Name",
    sortable: true,
    // className: classes.coinTh
  },
  {
    label: "Price",
    sortable: true,
  },
  {
    label: "CHG%",
    sortable: true,
  },
  {
    label: "CHG",
    sortable: true,
  },
  {
    label: "HIGH",
    sortable: true,
  },
  {
    label: "LOW",
    sortable: true,
  },
  {
    label: "VOL",
    sortable: true,
  },
  {
    label: "VOL 24 USD",
    sortable: true,
  },
  {
    label: "VOL 24 CHG%",
    sortable: true,
  },
  {
    label: "TR",
    sortable: true,
  },
];

export const CoinsTable = () => {
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("#");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");

  const onTableHeadSortLabelClick = useCallback(
    (label: SortingLabel) => {
      if (sortingLabel != label) {
        setSortingLabel(label);
        setSortingDirection("ASC");
      } else {
        setSortingDirection(sortingDirection === "ASC" ? "DESC" : "ASC");
      }
    },
    [sortingDirection, sortingLabel],
  );

  const headers = useMemo(() => {
    return HEADERS.map((header) => {
      return (
        <Table.Th key={header.label} className={header.className}>
          <Group
            gap={rem("2px")}
            justify={header.sortable ? "flex-start" : "center"}
            className={clsx(classes.tableHeadSortLabel, {
              [classes.tableHeadSortLabelSortingDesc]: sortingLabel === header.label && sortingDirection === "DESC",
            })}
            onClick={header.sortable ? () => onTableHeadSortLabelClick(header.label as SortingLabel) : undefined}
          >
            <Text c="inherit" variant="text-5" span>
              {header.label}
            </Text>
            {header.sortable ? <MarketSortIcon /> : null}
          </Group>
        </Table.Th>
      );
    });
  }, [onTableHeadSortLabelClick, sortingDirection]);

  const tableCoins = useMemo(() => {
    return COINS.map((coin, index) => {
      const type: RateType = match(coin.change)
        .with(
          P.when((value) => value > 0),
          () => "positive" as RateType,
        )
        .with(
          P.when((value) => value < 0),
          () => "negative" as RateType,
        )
        .otherwise(() => "zero" as RateType);
      return (
        <Table.Tr key={coin.name}>
          <Table.Td>
            <Group gap={rem(16)} className={classes.firstTdWrapper}>
              <StarIcon />
              <Text variant="text-4" className={classes.greyText} span>
                {index + 1}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td className={classes.tbodyTdWithIcon}>
            <Group gap={rem(8)}>
              {coin.icon}
              <Title c="white" fz={20} order={4}>
                {coin.name}
              </Title>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.price}
            </Text>
          </Table.Td>
          <Table.Td>
            <Group gap={rem(4)}>
              <RateIcon type={type} />
              <Text c="white" variant="text-4" span>
                {coin.change}%
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.changePrice}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.hight}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.low}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.vol}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.volDayUsd}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.volDayChgPercent}
            </Text>
          </Table.Td>
          <Table.Td>
            <UnstyledButton className={classes.buyButton}>BUY</UnstyledButton>
          </Table.Td>
        </Table.Tr>
      );
    });
  }, []);

  return (
    <Table classNames={{ tr: classes.tableTr, td: classes.tableTd }} verticalSpacing={rem("16px")} withRowBorders={true}>
      <Table.Thead classNames={{ thead: classes.tableHead }}>
        <Table.Tr>
          {headers}
          {/*<Table.Th>
            <Group h='100%' gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                #
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>
          <Table.Th>
            <Group gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                Coin Name
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>
          <Table.Th>
            <Group gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                Price
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>
          <Table.Th>
            <Group gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                CHG%
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>
          <Table.Th>
            <Group gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                CHG
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>
          <Table.Th>
            <Group gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                HIGH
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>
          <Table.Th>
            <Group gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                LOW
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>
          <Table.Th>
            <Group gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                VOL
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>
          <Table.Th>
            <Group gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                VOL 24 USD
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>
          <Table.Th>
            <Group gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                VOL 24 CHG%
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>
          <Table.Th>
            <Group gap={rem('2px')}>
              <Text c="inherit" variant="text-4" span>
                TR
              </Text>
              <MarketSortIcon />
            </Group>
          </Table.Th>*/}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody classNames={{ tbody: classes.tableBody }}>{tableCoins}</Table.Tbody>
    </Table>
  );
};

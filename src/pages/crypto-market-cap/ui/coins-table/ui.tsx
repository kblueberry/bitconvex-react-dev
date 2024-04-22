import { Group, Pill, Table, Text, Title, rem } from "@mantine/core";
import React, { useCallback, useMemo, useState } from "react";
import { P, match } from "ts-pattern";

import { randomChartData } from "@/shared/lib/random-chart-data";
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
  RateChart,
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
import clsx from "clsx";

interface Coin {
  icon: React.ReactNode;
  name: string;
  price: number;
  shortName: string;
  change: number;
  dayHighPrice: number;
  dayLowPrice: number;
  marketCap: string;
}

interface Header {
  label: string;
  sortable: boolean;
  className?: string;
}

type SortingLabel = '#' | 'Coin Name' | 'Coin Price' | 'Change' | '24h High Price' | '24h Low Price' | 'Market Cap';
type SortingDirection = 'ASC' | 'DESC';

const COINS: Coin[] = [
  {
    icon: <BitcoinIcon />,
    name: "Bitcoin",
    price: 43975.72,
    shortName: "BTC",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <EthereumIcon />,
    name: "Ethereum",
    price: 43975.72,
    shortName: "ETH",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <SuperFarmIcon />,
    name: "SuperFarm",
    price: 43975.72,
    shortName: "SUPER",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <TetherIcon />,
    name: "Tether",
    price: 43975.72,
    shortName: "USDT",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <BinanceCoinIcon />,
    name: "Binance Coin",
    price: 43975.72,
    shortName: "BNB",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <CardanoIcon />,
    name: "Cardano",
    price: 43975.72,
    shortName: "ADA",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <XRPIcon />,
    name: "XRP",
    price: 43975.72,
    shortName: "XRP",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <USDCoinIcon />,
    name: "USD Coin",
    price: 43975.72,
    shortName: "USDC",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <DogecoinIcon />,
    name: "Dogecoin",
    price: 43975.72,
    shortName: "DOGE",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <PolkadotIcon />,
    name: "Polkadot",
    price: 43975.72,
    shortName: "DOT",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <UniswapIcon />,
    name: "Uniswap",
    price: 43975.72,
    shortName: "UNI",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <StellarIcon />,
    name: "Stellar",
    price: 43975.72,
    shortName: "XLM",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <AnchorProtocolIcon />,
    name: "Anchor Protocol",
    price: 43975.72,
    shortName: "ANC",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <ChainlinkIcon />,
    name: "Chainlink",
    price: 43975.72,
    shortName: "LINK",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <CosmosIcon />,
    name: "Cosmos",
    price: 43975.72,
    shortName: "ATOM",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
];

const HEADERS: Header[] = [
  {
    label: '#',
    sortable: true
  },
  {
    label: 'Coin Name',
    sortable: true,
    className: classes.coinTh
  },
  {
    label: 'Coin Price',
    sortable: true
  },
  {
    label: 'Change',
    sortable: true
  },
  {
    label: '24h High Price',
    sortable: true
  },
  {
    label: '24h Low Price',
    sortable: true
  },
  {
    label: 'Market Cap',
    sortable: true
  },
  {
    label: 'Chart',
    sortable: false,
    className: classes.chartTh
  }
];

export const CoinsTable = () => {

  const [sortingLabel, setSortingLabel] = useState<SortingLabel>('#');
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>('ASC');

  const onTableHeadSortLabelClick = useCallback((label: SortingLabel) => {
    if (sortingLabel != label) {
      setSortingLabel(label);
      setSortingDirection('ASC');
    } else {
      setSortingDirection(sortingDirection === 'ASC' ? 'DESC' : 'ASC');
    }
  }, [sortingDirection, sortingLabel]);

  const headers = useMemo(() => {
    return HEADERS.map(header => {
      return (
        <Table.Th key={header.label} className={clsx({[classes.tableHeadThSortable]: header.sortable}, header.className)}>
          <Group gap={rem('2px')}
                 justify={header.sortable ? 'flex-start' : 'center'}
                 className={clsx(classes.tableHeadSortLabel, {[classes.tableHeadSortLabelSortingDesc]: sortingLabel === header.label && sortingDirection === 'DESC'})}
                 onClick={header.sortable ? () => onTableHeadSortLabelClick(header.label as SortingLabel) : undefined}>
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
        .with(P.when(value => value > 0), () => "positive" as RateType)
        .with(P.when(value => value < 0), () => "negative" as RateType)
        .otherwise(() => "zero" as RateType);
      return (
        <Table.Tr key={coin.name}>
          <Table.Td>
            <Group gap={rem(16)} className={classes.firstTdWrapper}>
              <StarIcon />
              <Text variant="text-3" className={classes.greyText} span>{index + 1}</Text>
            </Group>
          </Table.Td>
          <Table.Td className={classes.tbodyTdWithIcon}>
            <Group gap={rem(8)}>
              {coin.icon}
              <Title c="white" order={4} fz={20}>{coin.name}</Title>
              <Pill classNames={{root: classes.coinShortName, label: classes.coinShortNameLabel}}>
                {coin.shortName}
              </Pill>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>${coin.price}</Text>
          </Table.Td>
          <Table.Td>
            <Group gap={rem(4)}>
              <RateIcon type={type} size={22}/>
              <Text c="white" variant="text-4" span>{coin.change}%</Text>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>${coin.dayHighPrice}</Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>${coin.dayLowPrice}</Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>${coin.marketCap}</Text>
          </Table.Td>
          <Table.Td>
            <Group justify={'flex-end'} className={classes.coinChartWrapper}>
              <RateChart type={type} data={randomChartData()} />
            </Group>
          </Table.Td>
        </Table.Tr>
      );
    })
  }, []);

  return (
    <Table classNames={{tr: classes.tableTr, td: classes.tableTd}} verticalSpacing={rem('16px')} withRowBorders={true}>
      <Table.Thead classNames={{thead: classes.tableHead}}>
        <Table.Tr>
          {headers}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody classNames={{tbody: classes.tableBody}}>
        {tableCoins}
      </Table.Tbody>
    </Table>
  );

};

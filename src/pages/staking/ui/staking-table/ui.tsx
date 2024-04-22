import { Divider, Flex, Group, Pagination, rem, Stack, Table, Text, TextInput, Title } from "@mantine/core";
import classes from "./styles.module.css";
import { BitcoinIcon, MarketSortIcon, NextIcon, PreviousIcon, SearchIcon } from "@/shared/ui";
import { useCallback, useMemo, useState } from "react";
import clsx from "clsx";

type SortingLabel = 'Coin' | 'Plane' | 'Expires' | 'Realtime profit' | 'Invested';
type SortingDirection = 'ASC' | 'DESC';
const HEADERS  = [
  {
    label: 'Coin',
    sortable: true
  },
  {
    label: 'Plane',
    sortable: true,
    className: classes.coinTh
  },
  {
    label: 'Expires ',
    sortable: true
  },
  {
    label: 'RT profit',
    sortable: true
  },
  {
    label: 'Invested',
    sortable: true
  },
];
const COINS = [
  {
    icon: <BitcoinIcon width={29} />,
    name: "Bitcoin",
    Plane: "info",
    Expires : "info",
    Realtime_profit: "info",
    Invested: "info",
  },
  {
    icon: <BitcoinIcon  width={29}/>,
    name: "Bitcoin",
    Plane: "info",
    Expires : "info",
    Realtime_profit: "info",
    Invested: "info",
  },
  {
    icon: <BitcoinIcon  width={29}/>,
    name: "Bitcoin",
    Plane: "info",
    Expires : "info",
    Realtime_profit: "info",
    Invested: "info",
  },{
    icon: <BitcoinIcon width={29} />,
    name: "Bitcoin",
    Plane: "info",
    Expires : "info",
    Realtime_profit: "info",
    Invested: "info",
  },
  {
    icon: <BitcoinIcon width={29} />,
    name: "Bitcoin",
    Plane: "info",
    Expires : "info",
    Realtime_profit: "info",
    Invested: "info",
  },

]
export const StakingTable = () => {
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>('Coin');
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
        <Table.Th key={header.label} className={header.className}>
          <Group gap={rem('2px')}
                 justify={header.sortable ? 'flex-start' : 'center'}
                 className={clsx(classes.tableHeadSortLabel, {[classes.tableHeadSortLabelSortingDesc]: sortingLabel === header.label && sortingDirection === 'DESC'})}
                 onClick={header.sortable ? () => onTableHeadSortLabelClick(header.label as SortingLabel) : undefined}>
            <Text c="inherit" variant="text-4" span>
              {header.label}
            </Text>
            {header.sortable ? <MarketSortIcon /> : null}
          </Group>
        </Table.Th>
      );
    });
  }, [onTableHeadSortLabelClick, sortingDirection]);
  const tableCoins = useMemo(() => {
    return COINS.map((coin) => {

      return (
        <Table.Tr key={coin.name}>

          <Table.Td w={'225'} px={15} className={classes.tbodyTdWithIcon}>
            <Group gap={rem(8)}>
              {coin.icon}
              <Title c="white"  order={4}>{coin.name}</Title>
            </Group>
          </Table.Td>
          <Table.Td w={'225'} >
            <Text c="white" variant="text-3" span>{coin.Plane}</Text>
          </Table.Td>
          <Table.Td w={'225'} >
            <Text c="white" variant="text-3" span>{coin.Expires}</Text>
          </Table.Td>
          <Table.Td w={'225'} >
            <Text c="white" variant="text-3" span>{coin.Realtime_profit}</Text>
          </Table.Td>
          <Table.Td w={'225'} >
            <Text c="white" variant="text-3" span>{coin.Invested}</Text>
          </Table.Td>
        </Table.Tr>
      );
    });
  }, []);
  return (
    <Stack className={classes.wrapper}>

        <Stack className={classes.box} gap={0}>
          <Flex
            justify={'space-between'}
            align={'center'}
            mb={rem('32px')}
          >
            <Title order={4}>
              Active investments
            </Title>
            <TextInput
              size="lg"
              classNames={{
                input: classes.searchInput,
                wrapper: classes.searchInputWrapper,
              }}
              leftSection={<SearchIcon />}
              placeholder="Search"
            />
          </Flex>

          <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
          <div className={classes.tableContainer}>
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
          </div>
          <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} mt={rem('32px')} />

          <Group justify={"space-between"} mt={rem('32px')}>
            <Text variant="text-4" className={classes.greyText}>
              1-20 of 9,383 assets
            </Text>
            <Pagination total={20} defaultValue={1}>
              <Group gap={0} justify="center">
                <Pagination.Previous icon={PreviousIcon} />
                <Pagination.Items />
                <Pagination.Next icon={NextIcon} />
              </Group>
            </Pagination>
          </Group>
        </Stack>


    </Stack>
  );
};


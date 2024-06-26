import classes from "./styles.module.css";
import { BackgroundImage, Box, Flex, Group, rem, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { CloseEyeIcon, EyeIcon } from "@/pages/staking/ui";
import { randomChartData } from "@/shared/lib/random-chart-data";
import { RateChart } from "@/shared/ui";
import { CircularProgressbar } from "react-circular-progressbar";
import { useState } from "react";

export const HeaderMyProfile = () => {
  const [value ,setValue] = useState('$5,750,20')
  const [isHide,setIsHide] = useState(false)
  const [hiddenValue, setHiddenValue] = useState('')
  const hideValue = () => {
    setHiddenValue("*".repeat(value.length));
    setIsHide(true)
  }
  const showValue = () => {
    setValue(value)
    setIsHide(false)
  }
  return (
    <Box >
      <Flex className={classes.wrapper}>
        <Flex  className={classes.imageBlock} >
          <BackgroundImage
            src={`${import.meta.env.BASE_URL}assets/current-balance-bg.png`}
            className={classes.current}
          >
            <Stack gap={rem('8px')} >
              <Text className={classes.title}>
                Current Balance
              </Text>
              <Flex align={'center'} gap={rem('8px')}>
                <Text className={classes.amount}>
                  {isHide ? hiddenValue : value}
                </Text>
                <Box className={classes.hide}>
                  {
                    isHide ? <CloseEyeIcon  width="24" height="24" onClick={() => showValue()} /> :  <Flex><EyeIcon  width="24" height="24" onClick={() => hideValue()} /></Flex>
                  }
                </Box>
              </Flex>
            </Stack>
          </BackgroundImage>
        </Flex>
        <SimpleGrid cols={2}   className={classes.box}>
          <Flex  gap={rem('8px')}>
            <Box >
              <CircularProgressbar
                value={50}
                text={`50 %`}
                circleRatio={0.7}
                styles={{
                  root:{
                    height:'45px',
                    width:'50px'
                  },
                  trail: {
                    stroke: '#343434',
                    strokeLinecap: 'butt',
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                  },
                  path: {
                    borderRadius:'8px',
                    strokeLinecap: 'butt',
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                    stroke: '#F7931A',
                  },
                  text: {
                    fontSize:'28px',
                    fontWeight:400,
                    fill: '#6C7080',
                  },
                }}
                strokeWidth={9}
              />
            </Box>
            <Stack gap={rem('4px')}>
              <Text className={classes.titleGraph}>
                Bitcoin
              </Text>
              <Text className={classes.amountGraph}>
                $4848
              </Text>
            </Stack>
          </Flex>
          <Flex  gap={rem('8px')}>
            <Box w={50}>
              <CircularProgressbar
                value={20}
                text={`20 %`}
                circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                styles={{
                  root:{
                    height:'45px',
                    width:'50px'
                  },
                  trail: {
                    stroke: '#343434',
                    strokeLinecap: 'butt',
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                  },
                  path: {
                    borderRadius:'8px',
                    strokeLinecap: 'butt',
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                    stroke: '#627EEA',
                  },
                  text: {
                    fontSize:'28px',
                    fontWeight:500,
                    fill: '#6C7080',
                  },
                }}
                strokeWidth={9}
              />
            </Box>
            <Stack gap={rem('4px')}>
              <Text className={classes.titleGraph}>
                Ethereum
              </Text>
              <Text className={classes.amountGraph}>
                $1939
              </Text>
            </Stack>
          </Flex>
          <Flex  gap={rem('8px')}>
            <Box w={50}>
              <CircularProgressbar
                value={10}
                text={`10 %`}
                circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                styles={{
                  root:{
                    height:'45px',
                    width:'50px'
                  },
                  trail: {
                    stroke: '#343434',
                    strokeLinecap: 'butt',
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                  },
                  path: {
                    borderRadius:'8px',
                    strokeLinecap: 'butt',
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                    stroke: '#50AF95',
                  },
                  text: {
                    fontSize:'28px',
                    fontWeight:500,
                    fill: '#6C7080',
                  },
                }}
                strokeWidth={9}
              />
            </Box>
            <Stack gap={rem('4px')}>
              <Text className={classes.titleGraph}>
                Tether
              </Text>
              <Text className={classes.amountGraph}>
                $969
              </Text>
            </Stack>
          </Flex>
          <Flex  gap={rem('8px')}>
            <Box w={50}>
              <CircularProgressbar
                value={2}
                text={`2 %`}
                circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                styles={{
                  root:{
                    height:'45px',
                    width:'50px'
                  },
                  trail: {
                    stroke: '#343434',
                    strokeLinecap: 'butt',
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                  },
                  path: {
                    borderRadius:'8px',
                    strokeLinecap: 'butt',
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                    stroke: '#8247E5',
                  },
                  text: {
                    fontSize:'28px',
                    fontWeight:500,
                    fill: '#6C7080',
                  },
                }}
                strokeWidth={9}
              />
            </Box>
            <Stack gap={rem('4px')}>
              <Text className={classes.titleGraph}>
                Others
              </Text>
              <Text className={classes.amountGraph}>
                $163
              </Text>
            </Stack>
          </Flex>
        </SimpleGrid>
        <Box  className={classes.graph}>
          <Stack gap={rem(0)} className={classes.rateWrapper}>
            <Stack   className={classes.rateHeader}>
              <Group align='flex-end' justify='space-between'>
                <Text  className={classes.textGraph} c='white'>Today's Pnl.</Text>
                <Group gap={rem('4px')}>
                  <Title order={5} className={classes.positiveValue}>+$2.22</Title>
                  <Title order={6} className={classes.text} >/24h</Title>
                </Group>
              </Group>
            </Stack>
            <Stack className={classes.rateContent}>
              <RateChart left={0} bottom={0} top={10} right={0} type={'positive'} data={randomChartData()}/>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Box>

  );
};


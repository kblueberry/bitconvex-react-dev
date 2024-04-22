import { useState } from "react";
import { ArrowDown } from "@/shared/ui";
import { Combobox, Group, rem, Text, useCombobox } from "@mantine/core";

import classes from "./styles.module.css";
import clsx from "clsx";

const SHOW_ROWS_OPTIONS = [20, 50, 100];

export const ShowRowsCount = () => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [value, setValue] = useState<number>(SHOW_ROWS_OPTIONS[0]);
  const options = SHOW_ROWS_OPTIONS.map((item) => (
    <Combobox.Option value={item.toString()} key={item} className={clsx({[classes.dropdownOptionSelected]: value === item})} classNames={{option: classes.dropdownOption}}>
      Show {item}
    </Combobox.Option>
  ));
  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      transitionProps={{ duration: 200, transition: 'pop' }}
      onOptionSubmit={(val) => {
        setValue(Number(val));
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <Group gap={rem(4)} className={classes.showFilterWrapper} onClick={() => combobox.toggleDropdown()}>
          <Text variant="text-4" className={classes.greyText}>
            Show {value}
          </Text>
          <ArrowDown/>
        </Group>
      </Combobox.Target>
      <Combobox.Dropdown className={classes.dropdown}>
        <Combobox.Options classNames={{options: classes.dropdownOptions}}>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

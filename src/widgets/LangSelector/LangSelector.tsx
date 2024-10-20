'use client';

import { useState } from 'react';
import { UnstyledButton, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

import styles from './LangSelector.module.css';

const data = [
  { label: 'English' },
  { label: 'Russian' },
];

export const LangSelector = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  const items = data.map((item) => (
    <Menu.Item
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      withinPortal
      classNames={{
        dropdown: styles.dropdown,
        item: styles.item,
      }}
    >
      <Menu.Target>
        <UnstyledButton className={styles.control} data-expanded={opened}>
          <span className={styles.label}>{selected.label}</span>
          <IconChevronDown size="18px" className={styles.icon} stroke={3} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}

import { FC } from 'react';
import { Burger } from '@mantine/core';
import { OutletProps } from 'shared';

export const BurgerMenu: FC<{ context: OutletProps }> = ({ context }) => {
  const { opened, handlers } = context;
  const label = opened ? 'Close navigation' : 'Open navigation';
  return <Burger opened={opened} onClick={handlers.toggle} aria-label={label} />;
};

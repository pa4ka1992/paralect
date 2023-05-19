import { FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Drawer, Stack } from '@mantine/core';
import { Navbar } from 'features';
import { OutletProps } from 'shared';
import { Filters } from '..';

type Props = {
  isFetching: boolean;
};

export const Sidebar: FC<Props> = ({ isFetching }) => {
  const { opened, handlers } = useOutletContext<OutletProps>();

  return (
    <Drawer
      opened={opened}
      onClose={handlers.close}
      title="Authentication"
      overlayProps={{ opacity: 0.5, blur: 4 }}
      withCloseButton={true}
    >
      <Stack>
        <Navbar />
        <Filters isFetching={isFetching} />
      </Stack>
    </Drawer>
  );
};

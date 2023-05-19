import { FC } from 'react';
import { Drawer, MediaQuery, Stack } from '@mantine/core';
import { OutletProps } from 'shared';
import { Searchbar } from 'features';
import { Filters } from '..';

type Props = {
  isFetching: boolean;
  context: OutletProps;
};

export const Sidebar: FC<Props> = ({ isFetching, context }) => {
  const { opened, handlers } = context;

  return (
    <MediaQuery largerThan="md" styles={{ display: 'none' }}>
      <Drawer
        padding="xs"
        opened={opened}
        onClose={handlers.close}
        title="Фильтры"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        withCloseButton={true}
        closeButtonProps={{ color: 'whites.6', size: 'md' }}
        styles={(theme) => ({
          title: {
            fontWeight: theme.other.fontWeight.bold
          },
          content: {
            padding: theme.spacing.xs
          }
        })}
      >
        <Stack>
          <Searchbar isFetching={isFetching} context={context} />
          <Filters isFetching={isFetching} context={context} />
        </Stack>
      </Drawer>
    </MediaQuery>
  );
};

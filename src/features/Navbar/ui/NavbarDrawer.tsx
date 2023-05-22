import { FC } from 'react';
import { Drawer, MediaQuery, Stack } from '@mantine/core';
import { DisclosureProps } from 'shared';
import { Navbar } from './Navbar';

export const NavbarDrawer: FC<{ context: DisclosureProps }> = ({ context }) => {
  const { opened, handlers } = context;

  return (
    <MediaQuery largerThan="md" styles={{ display: 'none' }}>
      <Drawer
        padding="xs"
        opened={opened}
        position="top"
        onClose={handlers.close}
        title="Навигация"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        withCloseButton={true}
        closeButtonProps={{ color: 'whites.6', size: 'md' }}
        sx={{
          '.mantine-Drawer-content': {
            height: 'auto'
          }
        }}
      >
        <Stack spacing="0" onClick={handlers.close}>
          <Navbar />
        </Stack>
      </Drawer>
    </MediaQuery>
  );
};

import { Button, MediaQuery, Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { FC } from 'react';
type Props = {
  open: () => void;
};

export const SidebarButton: FC<Props> = ({ open }) => {
  return (
    <MediaQuery largerThan="md" styles={{ display: 'none' }}>
      <Button
        pos="sticky"
        top="100px"
        display="flex"
        variant="favorites"
        onClick={open}
        sx={{ alignSelf: 'flex-start', zIndex: 10 }}
      >
        <IconChevronLeft size="20px" />
        <Text fz="xs">Фильтры</Text>
      </Button>
    </MediaQuery>
  );
};

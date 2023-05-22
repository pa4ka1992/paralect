import { Button, MediaQuery, Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { FC } from 'react';
import { useMatchBreakPoints } from 'shared';
type Props = {
  open: () => void;
};

export const SidebarButton: FC<Props> = ({ open }) => {
  const { isMatches } = useMatchBreakPoints('xs');

  return (
    <MediaQuery largerThan="md" styles={{ display: 'none' }}>
      <Button
        size={isMatches ? 'md' : 'xs'}
        pos="sticky"
        top="70px"
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

import { FC } from 'react';
import { CloseButton, Button } from '@mantine/core';

export const ResetFilter: FC = () => {
  return (
    <>
      <Button>
        Сбросить все <CloseButton title="Settings" size="xl" iconSize={20} />
      </Button>
    </>
  );
};

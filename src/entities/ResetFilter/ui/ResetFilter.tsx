import { FC } from 'react';
import { CloseButton, Button } from '@mantine/core';
import { useAppActions } from 'shared';

export const ResetFilter: FC = () => {
  const { resetFilters } = useAppActions();

  return (
    <>
      <Button onClick={() => resetFilters()}>Сбросить все</Button>
      <CloseButton title="Settings" size="xl" iconSize={20} />
    </>
  );
};

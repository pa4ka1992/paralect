import { FC } from 'react';
import { CloseButton, Button } from '@mantine/core';
import { useAppActions } from 'shared';

export const ResetFilter: FC = () => {
  const { resetFilters, setSkipQuery } = useAppActions();

  const handleReset = () => {
    resetFilters();
    setSkipQuery(false);
  };

  return (
    <>
      <Button onClick={handleReset}>Сбросить все</Button>
      <CloseButton title="Settings" size="xl" iconSize={20} />
    </>
  );
};

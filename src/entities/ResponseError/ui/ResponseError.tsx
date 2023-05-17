import { FC } from 'react';
import { Stack, Title } from '@mantine/core';

type Props = {
  codeStatus: string;
  message: string;
};

export const ResponseError: FC<Props> = ({ codeStatus, message }) => {
  return (
    <Stack align="center" justify="center" h="100%" spacing="xl">
      <Title order={2}>Ошибка {codeStatus}</Title>
      <Title order={3}>{message}</Title>
    </Stack>
  );
};

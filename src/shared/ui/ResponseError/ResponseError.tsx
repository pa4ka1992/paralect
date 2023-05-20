import { FC } from 'react';
import { Stack, Title } from '@mantine/core';
import { useMatchBreakPoints } from 'shared';

type Props = {
  codeStatus: number;
  message: string;
};

export const ResponseError: FC<Props> = ({ codeStatus, message }) => {
  const { isMatches } = useMatchBreakPoints('sm');

  return (
    <Stack align="center" justify="center" h="100%" spacing="xl">
      <Title order={isMatches ? 2 : 3}>Ошибка {codeStatus}</Title>
      <Title ta="center" order={isMatches ? 3 : 4}>
        {message}
      </Title>
    </Stack>
  );
};

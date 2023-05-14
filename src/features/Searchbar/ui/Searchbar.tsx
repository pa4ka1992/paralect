import { ActionIcon, TextInput } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { FC } from 'react';

export const Searchbar: FC = () => {
  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" variant="filled">
          <IconArrowRight size="1.1rem" stroke={1.5} />
        </ActionIcon>
      }
      placeholder="Search questions"
      rightSectionWidth={42}
    />
  );
};

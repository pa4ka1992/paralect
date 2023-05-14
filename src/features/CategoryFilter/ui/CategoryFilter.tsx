import { FC, useState } from 'react';
import { Select } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useGetCataloguesQuery } from 'shared';

export const CategoryFilter: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const { data: categories } = useGetCataloguesQuery({});

  return (
    <>
      {categories && (
        <Select
          label="Отрасль"
          placeholder="Выберите отрасль"
          rightSection={isOpened ? <IconChevronUp size="1rem" /> : <IconChevronDown size="1rem" />}
          searchable
          onDropdownOpen={() => setIsOpened(true)}
          onDropdownClose={() => setIsOpened(false)}
          rightSectionWidth={30}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data={categories.map((category) => category.title)}
        />
      )}
    </>
  );
};

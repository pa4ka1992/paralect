import { FC, useState } from 'react';
import { Select } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useAppActions, useAppSelector, useGetCataloguesQuery } from 'shared';

export const CategoryFilter: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const { setCategory, setSkipQuery } = useAppActions();
  const { category } = useAppSelector((state) => state.stateReducer.filters);

  const { data: categories } = useGetCataloguesQuery({});

  const changeCategory = (value: string) => {
    setSkipQuery(true);
    setCategory(value);
  };

  return (
    <>
      {categories && (
        <Select
          value={category}
          data={categories.map((category) => ({ label: category.title, value: String(category.key) }))}
          onChange={changeCategory}
          onDropdownOpen={() => setIsOpened(true)}
          onDropdownClose={() => setIsOpened(false)}
          rightSectionWidth={30}
          label="Отрасль"
          placeholder="Выберите отрасль"
          searchable
          rightSection={isOpened ? <IconChevronUp size="1rem" /> : <IconChevronDown size="1rem" />}
          dropdownPosition="bottom"
          styles={{
            rightSection: { pointerEvents: 'none' },
            item: { whiteSpace: 'normal' }
          }}
        />
      )}
    </>
  );
};

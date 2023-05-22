import { FC, useMemo, useState } from 'react';
import { Select, useMantineTheme } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useAppActions, useAppSelector, useGetCataloguesQuery, useMatchBreakPoints } from 'shared';

export const CategoryFilter: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const theme = useMantineTheme();
  const { isMatches } = useMatchBreakPoints('sm');

  const { catalogues } = useAppSelector((state) => state.filtersReducer.filtersState);
  const { setCatalogues } = useAppActions();

  const { data: categories, isFetching } = useGetCataloguesQuery(null);

  const changeCategory = (value: string) => {
    setCatalogues(value);
  };

  const chevronIcon = useMemo(() => {
    return isOpened ? (
      <IconChevronUp size="20px" style={{ color: theme.colors.blues[1], cursor: 'pointer' }} />
    ) : (
      <IconChevronDown size="20px" style={{ color: theme.colors.whites[5] }} />
    );
  }, [isOpened, theme]);

  return (
    <Select
      data-elem="industry-select"
      disabled={!!isFetching}
      value={catalogues}
      data={categories ? categories.map((category) => ({ label: category.title, value: String(category.key) })) : []}
      onChange={changeCategory}
      onDropdownOpen={() => setIsOpened(true)}
      onDropdownClose={() => setIsOpened(false)}
      size={isMatches ? 'sm' : 'xs'}
      rightSectionWidth={46}
      label="Отрасль"
      placeholder="Выберите отрасль"
      searchable
      rightSection={chevronIcon}
      dropdownPosition="bottom"
    />
  );
};

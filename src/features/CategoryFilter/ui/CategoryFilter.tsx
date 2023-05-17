import { FC, useMemo, useState } from 'react';
import { Select, useMantineTheme } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useAppActions, useAppSelector, useGetCataloguesQuery } from 'shared';

export const CategoryFilter: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const theme = useMantineTheme();

  const { setCategory, setSkipQuery } = useAppActions();
  const { category } = useAppSelector((state) => state.filtersReducer.filters);

  const { data: categories } = useGetCataloguesQuery({});

  const changeCategory = (value: string) => {
    setSkipQuery(true);
    setCategory(value);
  };

  const chevronIcon = useMemo(() => {
    return isOpened ? (
      <IconChevronUp size="20px" style={{ color: theme.colors.blues[1] }} />
    ) : (
      <IconChevronDown size="20px" style={{ color: theme.colors.whites[5] }} />
    );
  }, [isOpened, theme]);

  return (
    <>
      {categories && (
        <Select
          value={category}
          data={categories.map((category) => ({ label: category.title, value: String(category.key) }))}
          onChange={changeCategory}
          onDropdownOpen={() => setIsOpened(true)}
          onDropdownClose={() => setIsOpened(false)}
          rightSectionWidth={46}
          label="Отрасль"
          placeholder="Выберите отрасль"
          searchable
          rightSection={chevronIcon}
          dropdownPosition="bottom"
          styles={(theme) => ({
            input: { fontSize: theme.fontSizes.xs },
            rightSection: { pointerEvents: 'none' },
            item: {
              whiteSpace: 'normal',
              '&:hover': {
                backgroundColor: theme.colors.blues[5]
              }
            },
            label: {
              marginBottom: '8px',
              fontWeight: 700
            }
          })}
        />
      )}
    </>
  );
};

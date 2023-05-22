import { MantineThemeOverride } from '@mantine/core';
import { AppShell, Button, Paper, ActionIcon, NavLink, NumberInput, Loader, Select } from './initial-components';

export const theme: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  lineHeight: '20px',
  primaryColor: 'blues',
  loader: 'dots',
  fontSizes: {
    xl: '28px',
    lg: '24px',
    md: '20px',
    sm: '16px',
    xs: '14px'
  },
  spacing: {
    xl: '28px',
    lg: '24px',
    md: '20px',
    sm: '16px',
    xs: '12px'
  },
  radius: {
    xl: '14px',
    lg: '12px',
    md: '8px',
    sm: '4px',
    xs: '2px'
  },
  defaultRadius: 'md',
  headings: {
    sizes: {
      h1: { fontSize: '28px', fontWeight: 700, lineHeight: '34px' },
      h2: { fontSize: '24px', fontWeight: 600, lineHeight: '36px' },
      h3: { fontSize: '20px', fontWeight: 700, lineHeight: '20px' },
      h4: { fontSize: '18px', fontWeight: 600, lineHeight: '20px' },
      h5: { fontSize: '16px', fontWeight: 400, lineHeight: '20px' }
    }
  },
  colors: {
    whites: ['#FFFFFF', '#F7F7F8', '#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88'],
    blues: ['#3B7CD3', '#5E96FC', '#92C1FF', '#B7D6FF', '#C9E0FF', '#DEECFF']
  },
  primaryShade: { light: 1 },
  components: {
    AppShell,
    Paper,
    Button,
    ActionIcon,
    NavLink,
    NumberInput,
    Loader,
    Select
  },
  black: '#232134',
  other: {
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  }
};

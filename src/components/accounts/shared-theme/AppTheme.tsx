import type { ThemeOptions } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { feedbackCustomizations } from './customizations/feedback';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surfaces';
import { shadows, shape } from './themePrimitives';



interface AppThemeProps {
  children: React.ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

export default function AppTheme({
  children,
  themeComponents,
}: AppThemeProps) {
  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        primary: {
          main: '#F4978E',
          light: '#F8AD9D',
          dark: '#F08080',
          contrastText: '#FFFFFF',
        }
      },
      // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
      cssVariables: {
        cssVarPrefix: 'template',
      },
      // typography,
      shadows,
      shape,
      components: {
        ...dataDisplayCustomizations,
        ...feedbackCustomizations,
        ...navigationCustomizations,
        ...surfacesCustomizations,
        ...themeComponents,
      },
    });
  }, [themeComponents]);
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

import { GlobalStyles } from 'tss-react';
import { useStyles } from 'tss-react/mui';

import { colors, DEFAULT_FONT_FAMILY } from '~/styles/theme';

const GlobalStyle = () => {
  const { theme } = useStyles();

  return (
    <GlobalStyles
      styles={{
        '*': {
          fontFamily: DEFAULT_FONT_FAMILY,
        },
        html: {
          height: '100%',
          fontSize: '16px',
          '@media (max-width: 1680px)': {
            fontSize: '12px',
          },
        },
        body: {
          height: '100vh',
          margin: 0,
          padding: 0,
          fontFamily: DEFAULT_FONT_FAMILY,
          backgroundColor: colors.White,
        },
        '#root': {
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
        'body.fontLoaded': {
          fontFamily: DEFAULT_FONT_FAMILY,
        },
        '.wrapper': {
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          '@media (min-width: 1367px)': {
            height: '100vh',
          },
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(4),
          paddingLeft: theme.spacing(7),
          paddingRight: theme.spacing(7),
        },
        '.container': {
          position: 'relative',
          flexGrow: 1,
        },
        '.fill-screen-content': {
          flexDirection: 'column',
          position: 'absolute',
          width: '100%',
          '@media (min-width: 1367px)': {
            height: '100%',
            display: 'flex',
          },
        },
        p: {
          marginBlockEnd: 0,
          marginBlockStart: 0,
        },
        '.rbc-overlay': {
          zIndex: 5000,
        },
        '.rbc-event': {
          backgroundColor: 'transparent',
          cursor: 'default',
          pointerEvents: 'none',
        },
      }}
    />
  );
};

export default GlobalStyle;

import { makeStyles } from 'tss-react/mui';

import { colors, fontSize } from '~/styles/theme';

const style = makeStyles()((theme) => ({
  container: {
    backgroundColor: colors.White,
    height: '100%',
    display: 'flex',
    position: 'relative',
  },
  logo: {
    width: '10.417vw',
  },
  background: {
    backgroundColor: '#F2F6FF',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    flexBasis: '100%',
    maxWidth: '100%',
  },
  title: {
    fontSize: fontSize[20],
    fontWeight: 600,
    color: colors.Charcoal,
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  subTitle: {
    fontSize: fontSize[16],
    marginBottom: theme.spacing(7),
    color: colors.Nobel,
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightRegular,
  },
  underTitle: {
    fontSize: fontSize[14],
    marginBottom: theme.spacing(7),
    color: colors.Black,
    fontWeight: theme.typography.fontWeightRegular,
  },
  errorMessage: {
    fontSize: fontSize[20],
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: colors.AlizarinCrimson,
    textAlign: 'center',
  },
  errorTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
    textAlign: 'center',
  },
  formContainer: {
    flexBasis: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: '20%',
  },
  formSection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
    alignItems: 'center',
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
  },
  whiteCardBox: {
    backgroundColor: colors.White,
    padding: theme.spacing(6),
    borderRadius: '8px',
    boxShadow: '1px 2px 8px 0px #D7E1F6',
  },
  iconStyle: {
    color: colors.DodgerBlue2,
    marginRight: theme.spacing(2),
  },
  resetPass: {
    marginLeft: theme.spacing(2),
    color: colors.DodgerBlue2,
  },
}));

export default style;

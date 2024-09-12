import loadable from '@loadable/component';
import { ReactSVG } from 'react-svg';

const LandingPage = loadable(() => import('~/pages/Hello'));

export default [
  {
    id: 'landing',
    title: 'Landing Page',
    path: '/landing',
    defaultPath: '/landing',
    component: <LandingPage />,
    exact: false,
    withHeader: true,
    icon: <ReactSVG src='/public/icons/menu-icon/map.svg' />,
  },
];

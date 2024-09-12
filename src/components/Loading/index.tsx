import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  height?: string | number;
  loading: boolean;
  loadingComponent?: React.ReactNode;
  py?: number | string;
}

const Loading = ({ children, height = '', loading, loadingComponent = null, py }: Props) => {
  if (loading) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' height={height} py={py}>
        {loadingComponent && <CircularProgress color='secondary' />}
      </Box>
    );
  }

  return <>{children}</>;
};

export default Loading;

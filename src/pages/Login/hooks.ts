import { useCallback } from 'react';

import useAuth from '~/context/auth/useAuth';

const useCustom = () => {
  const { handleLogin } = useAuth();

  const onSubmitLogin = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    () => {
      handleLogin();
    },
    [handleLogin],
  );

  return {
    methods: {
      onSubmitLogin,
    },
  };
};

export default useCustom;

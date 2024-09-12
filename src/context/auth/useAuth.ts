import { useContext, useCallback } from 'react';

import { AuthContext } from './AuthProvider';

const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = useCallback(() => {
    setIsLoggedIn?.(true);
  }, [setIsLoggedIn]);

  const handleLogout = useCallback(() => {
    setIsLoggedIn?.(false);
  }, [setIsLoggedIn]);

  return {
    handleLogin,
    handleLogout,
    isLoggedIn,
    setIsLoggedIn,
  };
};

export default useAuth;

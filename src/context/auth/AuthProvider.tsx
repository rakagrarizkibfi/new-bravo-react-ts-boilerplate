import React, { useState } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn?: (isLoggin: boolean) => void;
}

export const AuthContext = React.createContext<Partial<AuthContextProps>>({});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { useState } from 'react';

function useCustom() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');

  function handleInputPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleInputUsername(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return {
    handleInputPassword,
    handleInputUsername,
    handleShowPassword,
    password,
    showPassword,
    username,
  };
}

export default useCustom;

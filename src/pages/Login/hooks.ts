import { useCallback, useState } from 'react'

import useAuth from '~/context/auth/useAuth'

const useCustom = () => {
  const { handleLogin } = useAuth()
  const [error, setError] = useState(false)

  const handleSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (values) => {
      setError(false)
      handleLogin()
    },
    [handleLogin],
  )

  return {
    data: {
      error,
    },
    methods: {
      handleSubmit,
    },
  }
}

export default useCustom

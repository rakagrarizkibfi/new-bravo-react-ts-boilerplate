import PrivateLayout from '~/components/Layout/Private'
import ProtectedLayout from '~/components/Layout/Protected'
import useAuth from '~/context/auth/useAuth'

import ReloadPrompt from './components/ReloadPrompt'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <>
      {isLoggedIn ? <ProtectedLayout /> : <PrivateLayout />}
      <ReloadPrompt />
    </>
  )
}

export default App

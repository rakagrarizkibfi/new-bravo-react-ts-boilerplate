import ProtectedLayout from '~/components/Layout/Protected';
import PublicLayout from '~/components/Layout/Public';
import useAuth from '~/context/auth/useAuth';

const App = () => {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <ProtectedLayout /> : <PublicLayout />}</>;
};

export default App;

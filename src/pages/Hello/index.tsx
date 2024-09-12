import Button from '@mui/material/Button';

import useAuth from '~/context/auth/useAuth';

const Hello = () => {
  const { handleLogout } = useAuth();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '50px',
      }}
    >
      <ul
        style={{
          padding: 0,
          listStyle: 'none',
          fontSize: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <li>🚀 Vite</li>
        <li>🔥 React</li>
        <li>📖 TypeScript</li>
        <li>🔨 Eslint</li>
      </ul>
      <p>Don&apos;t forgot to install Eslint and Prettier in your VSCode</p>
      <div>
        <Button
          data-testid='btn-submit-logout'
          variant='contained'
          color='secondary'
          className='btn-rounded'
          type='button'
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Hello;

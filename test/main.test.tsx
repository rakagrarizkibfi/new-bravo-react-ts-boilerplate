import { screen } from '@testing-library/react';

import App from '~/App';
import { render } from '~/utils/testUtils';

const mockUseRoutes = vi.fn();

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useRoutes: () => mockUseRoutes,
}));

test('renders react component', async () => {
  render(<App />);
  const divElement = await screen.findByText('Welcome to BFI React TS Boilerplate');
  expect(divElement).toBeInTheDocument();
});

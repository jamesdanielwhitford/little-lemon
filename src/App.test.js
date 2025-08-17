import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon homepage', () => {
  render(<App />);
  const heading = screen.getByText(/little lemon/i);
  expect(heading).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const homeLink = screen.getByRole('link', { name: /home/i });
  const reserveLink = screen.getByRole('link', { name: /reserve a table/i });
  
  expect(homeLink).toBeInTheDocument();
  expect(reserveLink).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import { ActiveLink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

it('should renders correctly', () => {
  render(<ActiveLink href="/" activeClassName="active" content="Home" />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});

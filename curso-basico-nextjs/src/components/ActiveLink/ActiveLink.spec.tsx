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

describe('ActiveLink component', () => {
  it('should renders correctly', () => {
    render(<ActiveLink href="/" activeClassName="active" content="Home" />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should adds active class if the link is currently active', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active" content="Home" />,
    );
    expect(getByText('Home')).toHaveClass('active');
  });
});

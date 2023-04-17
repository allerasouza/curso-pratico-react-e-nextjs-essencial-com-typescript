import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  content: string;
  activeClassName: string;
}

export function ActiveLink({
  activeClassName,
  content,
  ...otherProps
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const className = asPath === otherProps.href ? activeClassName : '';
  return (
    <Link {...otherProps} className={className}>
      {content}
    </Link>
  );
}

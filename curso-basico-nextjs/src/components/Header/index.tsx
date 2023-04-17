import Link from 'next/link';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath } = useRouter();
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="DevNews!" />
        <nav>
          <Link href="/" className={asPath === '/' ? styles.active : ''}>Home</Link>
          <Link href="/posts" className={asPath === '/posts' ? styles.active : ''}>Posts</Link>
        </nav>
      </div>
    </header>
  );
}

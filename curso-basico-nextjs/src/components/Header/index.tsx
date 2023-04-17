import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="DevNews!" />
        <nav>
          <ActiveLink activeClassName={styles.active} content="Home" href="/" />
          <ActiveLink
            activeClassName={styles.active}
            content="Posts"
            href="/posts"
          />
        </nav>
      </div>
    </header>
  );
}

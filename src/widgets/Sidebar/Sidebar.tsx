import { Logo } from '@/shared/ui/Logo';

import { Navigation } from './Navigation';
import { Download } from './Download';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <Navigation />
      <Download />
    </div>
  );
}

import Image from 'next/image';

import styles from './Logo.module.css';
import logoIcon from './logo.svg';

export const Logo = () => {
  return (
    <div className={styles.container}>
      <Image alt="logotype" src={logoIcon} width={28} height={28} />
      <p className={styles.title}>VocApp</p>
    </div>
  );
}

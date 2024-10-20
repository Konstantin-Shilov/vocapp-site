import { Link } from './Link';

import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Trainers</p>
      <div className={styles.navigation}>
        <Link href="/grammar">Grammar</Link>
        <Link href="/vocabulary">Vocabulary</Link>
        <Link href="/pronunciation">Pronunciation</Link>
        <Link href="/games">Games for kids</Link>
      </div>
    </div>
  );
}

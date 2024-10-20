import Image from 'next/image';

import headImage from './head.png';
import styles from './Tutor.module.css';

export const Tutor = () => {
  return (
    <div className={styles.container}>
      <Image alt="Tutor" src={headImage} layout='responsive' objectFit='contain' />
      <div className={styles.content}>
        <p className={styles.title}>AI Tutor</p>
        <p className={styles.description}>Wow! You’ve completed the task. Click next or just say and I will give you a
          new task</p>
      </div>
    </div>
  );
}

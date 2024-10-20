import {QRCodeSVG} from 'qrcode.react';

import styles from './Download.module.css';

export const Download = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Download VocApp</p>
      <div className={styles.qrContainer}>
        <QRCodeSVG
          value={"https://vocapp.com/"}
          title={"VocApp app"}
          size={100}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          marginSize={0}
        />
      </div>
    </div>
  );
}

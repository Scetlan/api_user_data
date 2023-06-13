import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/userupload/5480733/file/original-ce274966c2f19bc95761eb288c50b956.jpg?compress=1&resize=800x600"
        alt=""
      />
    </div>
  );
}

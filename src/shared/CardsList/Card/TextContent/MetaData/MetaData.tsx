import React from 'react';
import styles from './metadata.css';

interface User {
  children?: React.ReactNode;
}

export function MetaData({ children }: User) {
  return (
    <div className={styles.metaData}>
      <div className={styles.userlink}>
        <img className={styles.avatar} src="https://cdn.dribbble.com/userupload/7130529/file/original-011352bd94a356b528eeb6d7198d87a0.png?compress=1&resize=30x"
          alt="avatar"
        />
        <a href="#user-url" className={styles.username}>{children}</a>
      </div>
      <span className={styles.createAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        4 часа назад</span>
    </div>
  );
}

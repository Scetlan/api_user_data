import React from 'react';
import styles from './title.css';

interface Title {
  children?: React.ReactNode;
}

export function TitleComponent({ children }: Title) {
  return (
    <h2 className={styles.title}>
      <a href='#post-url' className={styles.postLink}>
        {children}
      </a>
    </h2>
  );
}

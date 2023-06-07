import React from 'react';
import { Action } from './Action';
import { KarmaCounter } from './KarmaCounter';
import styles from './control.css';
import { CommentButton } from './CommentButton';


export function Control() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />

      <CommentButton />

      <Action />
    </div>
  );
}

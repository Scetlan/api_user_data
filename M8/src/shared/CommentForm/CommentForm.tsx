import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { commentContext } from '../context/commentContext';
import styles from './commentform.css';

export function CommentForm() {
  const { value, onChange } = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.input} onSubmit={handleSubmit}>
      <textarea className={styles.textarea} onChange={handleChange} value={value}/>
      <button type='submit' className={styles.button}> Комментировать</button>
    </form>
  );
}

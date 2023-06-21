import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { PropsDate } from '../Comment';
import { responseContext } from '../context/pesponseContext';
import styles from './buttonresponse.css';

export function ButtonResponse({props}: PropsDate) {
    const { value, onChange } = useContext(responseContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  

  return (
    <form className={styles.inputResponse} onSubmit={handleSubmit}>
      <textarea className={styles.textarea} onChange={handleChange} value={props.surname}/>
      <button type='submit' className={styles.button}> Комментировать</button>
    </form>
  );
}

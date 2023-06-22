import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../../store';
import styles from './commentform.css';

export function CommentForm() {

  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.input} onSubmit={handleSubmit}>
      <textarea className={styles.textarea} onChange={handleChange} value={value} />
      <button type='submit' className={styles.button}> Комментировать</button>
    </form>
  );
}

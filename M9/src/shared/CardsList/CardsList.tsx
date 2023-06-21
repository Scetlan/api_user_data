import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {

  const [posts] = usePostsData();

  return (
    <ul className={styles.cardsList}>
      <postsContext.Provider value={posts}>
        {posts.map((post) => <Card key={post.id} post={post} />)}
      </postsContext.Provider>
    </ul>
  );
}

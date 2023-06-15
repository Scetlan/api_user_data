import React from 'react';
import { Post } from '../../../../hooks/usePostsData';
import { PostProps } from '../Card';
import { MetaData } from './MetaData';
import styles from './textcontent.css';
import { TitleComponent } from './Title';

interface IPostProps {
  post: PostProps
}

export function TextContent(post: IPostProps) {
  return (
    <div className={styles.textContent}>
      <MetaData>
      {post.post.post.author}
        {/* Дмитрий Гришин */}
      </MetaData>
      <TitleComponent>
        {post.post.post.title}
        {/* Следует отметить, что новая модель организационной деятельности... */}
      </TitleComponent>
    </div>
  );
}

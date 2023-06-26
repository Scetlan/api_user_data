import React from 'react';
import { Post } from '../../hooks/usePostsData';

export const postsContext = React.createContext<Post[]>([]);
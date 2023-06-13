import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';

interface ISearchBlockProps {
  token: string;
}

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function SearchBlock({ token }: ISearchBlockProps) {

  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${token}` }
    }).then((response) => {
      const userData = response.data;
      setData({ name: userData.name, iconImg: userData.icon_img })
    })
      .catch(console.log);
  }, [token]);

  const { iconImg, name } = data;
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
}

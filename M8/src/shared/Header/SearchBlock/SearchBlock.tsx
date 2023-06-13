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
    console.log(`Токен: ${token}`);
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${token}` }
    }).then((response) => {
      const { name, icon_img } = response.data;
      console.log(response.data);
      setData({ name: name, iconImg: icon_img })
    })
      .catch(console.log);

    // const data = async () => {
    //   const a = await axios.get('https://oauth.reddit.com/api/v1/me', {
    //     headers: { Authorization: `bearer ${token}` }
    //   });
    //   console.log(a.data);
      
    // }
    // data();
  }, [token]);

  const { iconImg, name } = data;
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
}

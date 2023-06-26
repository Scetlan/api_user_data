import axios from "axios";
import { useEffect, useState } from "react";

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});

    // useEffect(() => {
    // if (token) {
    //     console.log(`Токен: ${token}`); //удалить консоль console.log(`Токен: ${token}`);
    //     axios.get('https://oauth.reddit.com/api/v1/me.json', {
    //         headers: { Authorization: `bearer ${token}` }
    //     }).then((response) => {
    //         const { name, icon_img } = response.data;
    //         setData({ name: name, iconImg: icon_img })
    //     })
    //         .catch(console.log);
    // }
    // }, [token]);

    return [data];
}
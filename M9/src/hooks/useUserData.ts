import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});
    const token = useContext(tokenContext);

    if (token !== undefined) {
        useEffect(() => {
            axios.get('https://oauth.reddit.com/api/v1/me.json', {
                headers: { Authorization: `bearer ${token}` }
            }).then((response) => {
                const { name, icon_img } = response.data;
                setData({ name: name, iconImg: icon_img })
            })
                .catch(console.log);

        }, [token]);
    }
    return [data];
}
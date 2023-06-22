import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

export interface Post {
    id?: string;
    title?: string;
    author?: string;
    thumbnail?: string;
    icon_img?: string;
    subreddit?: string;
}


export function usePostsData() {
    const token = useContext(tokenContext);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        if (token !== undefined) {
            console.log(`Токен: ${token}`); //удалить консоль console.log(`Токен: ${token}`);
            axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=5', {
                headers: { Authorization: `bearer ${token}` },
            }).then((response) => {
                const posts = response.data.data.children.map((post: any) => {
                    return {
                        id: post.data.id,
                        title: post.data.title,
                        author: post.data.author,
                        thumbnail: post.data.thumbnail,
                        icon_img: post.data.sr_detail.icon_img,
                        subreddit: post.data.subreddit,
                    }
                })
                setPosts(posts);
            })
                .catch(console.log);
        }
    }, [token]);
    
    return [posts];

}


import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

export interface ICommentInfo {
    id?: string,
    author?: string,
    icon_img?: string,
}

export function useComment(subreddit: string, postId: string) {
    const token = useContext(tokenContext);
    const [posts, setPosts] = useState<ICommentInfo[]>([]);

    useEffect(() => {
        if (token !== undefined) {
            console.log(`Токен: ${token}`); //удалить консоль console.log(`Токен: ${token}`);
            axios.get(`http://api.reddit.com/r/${subreddit}/comments/${postId}`, {
                headers: { Authorization: `bearer ${token}` },
            }).then((response) => {
                const posts = response.data.data.children.map((post: any) => {
                    return {
                        id: post.data.id,
                        author: post.data.author,
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
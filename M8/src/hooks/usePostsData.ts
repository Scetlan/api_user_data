import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

export interface Post {
    id?: string;
    title?: string;
    author?: string;
}


export function usePostsData() {
    const token = useContext(tokenContext);
    const [posts, setPosts] = useState<Post[]>([]);



    useEffect(() => {
        console.log(`Токен: ${token}`); //удалить консоль console.log(`Токен: ${token}`);
        axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=5', {
            headers: { Authorization: `bearer ${token}` },
        }).then((response) => {
            console.log(response.data);
            const posts = response.data.data.children.map((post: any) => {
                
                return {
                    id: post.data.id,
                    title: post.data.title,
                    author: post.data.author
                }
            })

            console.log(posts);
            
            setPosts(posts);
        })
            .catch(console.log);

    }, [token]);

    return [posts];

}


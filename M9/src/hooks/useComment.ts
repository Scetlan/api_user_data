import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

export interface IData {
    id?: string;
    surname?: string;
    comment?: string;
}

export interface ICommentInfo {
    title?: string;
    comments?: IData[];
}

export function useComment(subreddit?: string, postId?: string) {
    const token = useContext(tokenContext);
    const [comment, setComment] = useState<ICommentInfo>();

    useEffect(() => {
        if (token) {
            axios.get(`https://oauth.reddit.com/r/${subreddit}/comments/${postId}`, {
                headers: { Authorization: `bearer ${token}` },
            }).then((response) => {
                const title = response.data[0].data.children[0].data.title;
                
                const comments = response.data[1].data.children.map((comment: any) => {
                    return {
                        id: comment.data.subreddit_id,
                        surname: comment.data.author,
                        comment: comment.data.body
                    }
                })
                
                setComment({title: title, comments: comments, });
            })
                .catch(console.log);
        }
    }, [token]);

    return [comment];

}
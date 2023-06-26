import React from 'react';
import { userData } from '../Post';

type CommentContextType = {
    value: string;
    onChange: (value:string) => void;
}

export const commentContext = React.createContext<CommentContextType>({
    value: ``,
    onChange: () => {},
});
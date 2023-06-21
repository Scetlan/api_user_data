import React from "react";

type CommentContextType = {
    value: string;
    onChange: (value:string) => void;
}

export const responseContext = React.createContext<CommentContextType>({
    value: '',
    onChange: () => {},
});
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { useToken } from "./hooks/useToken";
import './main.global.css';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { commentContext } from "./shared/context/commentContext";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContexProvider } from "./shared/context/userContext";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";


function AppComponent() {
    const [commentValue, setCommentValue] = useState('');

    const [token] = useToken();
    const { Provider } = tokenContext;

    const CommentProvider = commentContext.Provider;

    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
            <Provider value={token}>
                <UserContexProvider>
                    <Layout>
                        <Header />
                        <Content>
                            <CardsList />
                        </Content>
                    </Layout>
                </UserContexProvider>
            </Provider>
        </CommentProvider>
    );
}

export const App = hot(() => <AppComponent />);
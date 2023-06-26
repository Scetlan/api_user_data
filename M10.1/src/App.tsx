import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { useToken } from "./hooks/useToken";
import './main.global.css';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { commentContext } from "./shared/context/commentContext";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContexProvider } from "./shared/context/userContext";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootRecucer } from "./store";


const store = createStore(rootRecucer, composeWithDevTools());

function AppComponent() {
    const [commentValue, setCommentValue] = useState('');

    const [token] = useToken();

    const TokenProvider = tokenContext.Provider;
    // const { Provider } = tokenContext;

    const CommentProvider = commentContext.Provider;

    return (
        <Provider store={store}>
            <CommentProvider value={{
                value: commentValue,
                onChange: setCommentValue,
            }}>
                <TokenProvider value={token}>
                    <UserContexProvider>
                        <Layout>
                            <Header />
                            <Content>
                                <CardsList />
                            </Content>
                        </Layout>
                    </UserContexProvider>
                </TokenProvider>
            </CommentProvider>
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);
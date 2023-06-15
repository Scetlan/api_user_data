import React from "react";
import { hot } from "react-hot-loader/root";
import { useToken } from "./hooks/useToken";
import './main.global.css';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContexProvider } from "./shared/context/userContext";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";


function AppComponent() {
    const [token] = useToken();

    return (
        <tokenContext.Provider value={token}>
            <UserContexProvider>
                <Layout>
                    <Header />
                    <Content>
                        <CardsList />
                    </Content>
                </Layout>
            </UserContexProvider>
        </tokenContext.Provider>
    );
}

export const App = hot(() => <AppComponent />);
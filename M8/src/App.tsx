import React from "react";
import { hot } from "react-hot-loader/root";
import { useToken } from "./hooks/useToken";
import './main.global.css';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
// import { EColor, NameUser } from "./shared/NameUser";


function AppComponent() {
    const [token] = useToken()

    return (
        <Layout>
            <Header token={token}/>
            <Content>
                <CardsList />
            </Content>
        </Layout>
    );
}

export const App = hot(AppComponent);
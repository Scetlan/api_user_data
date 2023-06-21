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

const userData = [
    {
        id: 'asd345',
        surname: 'Михаил Рогов',
        comment: 'Принимая во внимание показатели успешности, разбавленное изрядной долей эмпатии, рациональное мышление прекрасно подходит для реализации анализа существующих паттернов поведения. Равным образом, убеждённость некоторых оппонентов, в своём классическом представлении.',
    },
    {
        id: 'asd9875',
        surname: 'Дмитрий Фёдоров',
        comment: 'Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. ',
    },
    {
        id: 'asd349875',
        surname: 'Алексей Киняев ',
        comment: 'Новая модель организационной деятельности представляет собой интересный эксперимент проверки форм воздействия. Вот вам яркий пример современных тенденций - перспективное планирование способствует повышению качества кластеризации усилий. Внезапно, некоторые особенности внутренней политики.'
    },
];

const store = createStore(() => { }, composeWithDevTools());

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
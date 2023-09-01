// import { Component } from "./components/index";
import "@/assets/sass/global.scss";
import { Header } from "./components/index";
import { MenuHamburguer } from "./components/index";
import { FrontPage } from "./components/index";

export function App() {
    return (
        <>
            <Header>
                <MenuHamburguer />
            </Header>
            <main className="wrapper">
                <FrontPage />
            </main>
        </>
    );
}

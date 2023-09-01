import style from "./Header.module.scss";

import { ReactElement } from "react";

export function Header({ children }: { children?: ReactElement }) {
    return (
        <header className={style.header}>
            <a href="/">
                <h1>
                    <img src="/src/assets/img/logo.svg" alt="SNAP logo" />
                </h1>
            </a>
            {children}
        </header>
    );
}

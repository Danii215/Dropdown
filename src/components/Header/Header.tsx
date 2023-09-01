import style from "./Header.module.scss";
import logo from "@/assets/img/logo.svg";
import { ReactElement } from "react";

export function Header({ children }: { children?: ReactElement }) {
    return (
        <header className={style.header}>
            <a href="/">
                <h1>
                    <img src={logo} alt="SNAP logo" />
                </h1>
            </a>
            {children}
        </header>
    );
}

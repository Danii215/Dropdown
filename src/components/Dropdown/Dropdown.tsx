import { useState } from "react";
import style from "./Dropdown.module.scss";
import todo from "@/assets/img/icon-todo.svg";
import calendar from "@/assets/img/icon-calendar.svg";
import reminders from "@/assets/img/icon-reminders.svg";
import planning from "@/assets/img/icon-planning.svg";

interface DropdownProps {
    title: string;
    items: string[];
    url: string[];
    icon?: string[];
}

// O tipo Record é um tipo nativo do typescript e funciona como
// se fosse um dicionário. O primeiro genérico especifica o tipo
// da chave e o segundo, o tipo do valor correspondente.
const icones: Record<string, string> = {
    "icon-todo": todo,
    "icon-calendar": calendar,
    "icon-reminders": reminders,
    "icon-planning": planning,
};

export function Dropdown({ title, items, url, icon }: DropdownProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={style.dropdown}>
            <button data-open={isOpen} onClick={() => setOpen(!isOpen)}>
                {title}
            </button>
            <ul data-open={isOpen}>
                {items.map((item, index) => (
                    <li key={index}>
                        {icon && icon[index] && (
                            <img src={icones[icon[index]]} alt="" />
                        )}
                        <a href={url[index]}>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

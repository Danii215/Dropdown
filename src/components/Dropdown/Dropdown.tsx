import { useState } from "react";
import style from "./Dropdown.module.scss";

interface DropdownProps {
    title: string;
    items: string[];
    url: string[];
    icon?: string[];
}

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
                            <img
                                src={"src/assets/img/" + icon[index] + ".svg"}
                                alt=""
                            />
                        )}
                        <a href={url[index]}>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

import style from "./MenuHamburguer.module.scss";
import { Dropdown } from "../Dropdown/Dropdown";
import { OutlinedButton } from "../index";
import { useState } from "react";

export function MenuHamburguer() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={style.menu}>
                <button
                    onClick={() => setOpen(!isOpen)}
                    className={style.menu__burguer}
                >
                    <img
                        src={
                            isOpen
                                ? "/src/assets/img/icon-close-menu.svg"
                                : "/src/assets/img/icon-menu.svg"
                        }
                        alt="Burguer"
                    />
                </button>
                <div data-open={isOpen} className={style.menu__navigation}>
                    <nav data-open={isOpen}>
                        <Dropdown
                            title="Features"
                            items={[
                                "Todo List",
                                "Calendar",
                                "Reminders",
                                "Planning",
                            ]}
                            url={["#", "#", "#", "#"]}
                            icon={[
                                "icon-todo",
                                "icon-calendar",
                                "icon-reminders",
                                "icon-planning",
                            ]}
                        />
                        <Dropdown
                            title="Company"
                            items={["History", "Our team", "Blog"]}
                            url={["#", "#", "#"]}
                        />
                        <a href="#">Careers</a>
                        <a href="#">About</a>
                    </nav>
                    <nav data-open={isOpen}>
                        <a href="#">Login</a>
                        <OutlinedButton url="#">Register</OutlinedButton>
                    </nav>
                </div>
            </div>
        </>
    );
}

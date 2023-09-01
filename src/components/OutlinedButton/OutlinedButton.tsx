import style from "./OutlinedButton.module.scss";

interface OutlinedButtonProps {
    url: string;
    theme?: string;
    children?: React.ReactNode;
}

export function OutlinedButton({ url, theme, children }: OutlinedButtonProps) {
    const classes = [style.outlinedButton];

    if (theme) classes.push(style[theme]);

    return (
        <a className={classes.join(" ")} href={url}>
            {children}
        </a>
    );
}

import style from "./FrontPage.module.scss";
import { OutlinedButton } from "../index";

export function FrontPage() {
    return (
        <section className={style.frontpage}>
            <article className={style.frontpage__content}>
                <div className={style.frontpage__container}>
                    <h2>Make remote work</h2>
                    <h3>
                        Get your team in sync, no matter your location.
                        Streamline processes, create team rituals, and watch
                        productivity soar.
                    </h3>
                    <OutlinedButton url="#" theme="dark">
                        Learn more
                    </OutlinedButton>
                </div>
                <div className={style.frontpage__buttons}>
                    <img
                        src="src/assets/img/client-databiz.svg"
                        alt="Client Databiz"
                    />
                    <img
                        src="src/assets/img/client-audiophile.svg"
                        alt="Client Audiophile"
                    />
                    <img
                        src="src/assets/img/client-meet.svg"
                        alt="Client Meet"
                    />
                    <img
                        src="src/assets/img/client-maker.svg"
                        alt="Client Maker"
                    />
                </div>
            </article>
            <picture>
                <source
                    media="(max-width:1000px)"
                    srcSet="src/assets/img/image-hero-mobile.png"
                />
                <img
                    src="src/assets/img/image-hero-desktop.png"
                    alt="Snap hero banner"
                />
            </picture>
        </section>
    );
}

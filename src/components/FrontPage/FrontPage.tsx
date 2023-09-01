import style from "./FrontPage.module.scss";
import { OutlinedButton } from "../index";
import databiz from "@/assets/img/client-databiz.svg";
import audiophile from "@/assets/img/client-audiophile.svg";
import meet from "@/assets/img/client-meet.svg";
import maker from "@/assets/img/client-maker.svg";
import mobileHero from "@/assets/img/image-hero-mobile.png";
import desktopHero from "@/assets/img/image-hero-desktop.png";

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
                    <img src={databiz} alt="Client Databiz" />
                    <img src={audiophile} alt="Client Audiophile" />
                    <img src={meet} alt="Client Meet" />
                    <img src={maker} alt="Client Maker" />
                </div>
            </article>
            <picture>
                <source media="(max-width:1000px)" srcSet={mobileHero} />
                <img src={desktopHero} alt="Snap hero banner" />
            </picture>
        </section>
    );
}
